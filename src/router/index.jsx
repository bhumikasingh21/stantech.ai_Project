import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/about/About";
import MemberDetail from "../components/memberStories/MemberDetail";

const AppRoutes = () => {

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/:id" element={<MemberDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
