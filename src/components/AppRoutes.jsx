import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./Results";
import TypoMeter from "./TypoMeter";
const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/game" element={<TypoMeter />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
