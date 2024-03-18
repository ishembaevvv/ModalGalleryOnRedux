import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import { ROUTES } from "../../utils/routes";
import Gallery from "../Gallery/Gallery";
import Tomato from "../Tomato/Tomato";
import Crismon from "../Crismon/Crismon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.GALLERY} element={<Gallery />} />
      <Route path={ROUTES.TOMATO} element={<Tomato />} />
      <Route path={ROUTES.CRISMON} element={<Crismon />} />
    </Routes>
  );
}
