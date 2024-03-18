import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Episodes from "../pages/Episodes";
const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="episodes" element={<Episodes />} />
  </Routes>
);

export default RoutesApp;
