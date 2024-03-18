import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function Main() {
  return (
    <div>
      <Link to={ROUTES.GALLERY}>Visit the Gallery</Link>
      <h1>Featured Images</h1>
      <ul>
        <li>
          <Link to={ROUTES.TOMATO}>Tomato</Link>
        </li>
        <li>
          <Link to={ROUTES.CRISMON}>Crismon</Link>
        </li>
      </ul>
    </div>
  );
}
