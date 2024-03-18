import React from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { close_modal, open_modal } from "../../store/actions";
import { ROUTES } from "../../utils/routes";

export default function Gallery() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [getColor, setGetColor] = useState([]);

  // const openModal = (el) => {
  //   setGetColor(el);
  //   setModal(true);
  // };

  console.log(state);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "80vh",
      }}
    >
      {data.map((el) => {
        return (
          <div key={el.id}>
            <div style={{ width: 50, height: 50, background: el.color }}></div>
            <Link onClick={() => dispatch(open_modal(el))}>{el.title}</Link>
          </div>
        );
      })}

      {state.modal && (
        <div
          style={{
            border: "1px solid #000",
            width: 800,
            height: 400,
            padding: 10,
            position: "absolute",
            right: 300,
          }}
        >
          <h1>{state.colors.title}</h1>
          <div
            style={{ width: 600, height: 300, background: state.colors.color}}
          ></div>
          <button onClick={() => dispatch(close_modal())}>close</button>
        </div>
      )}

      <Link to={ROUTES.MAIN}>Close</Link>
    </div>
  );
}
