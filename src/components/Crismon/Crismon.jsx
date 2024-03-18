import React from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function Crismon() {
  const FilterData = () => {
    let arr = data.filter((el) => {
      return el.title === "Crismon";
    });
    return arr.map((el) => {
      return (
        <div>
          <h1>{el.title}</h1>
          <div
            key={el.id}
            style={{
              width: 1200,
              height: 500,
              background: el.color,
            }}
          ></div>
          <br />
          <Link to={ROUTES.MAIN}>close</Link>
        </div>
      );
    });
  };

  return FilterData();
}
