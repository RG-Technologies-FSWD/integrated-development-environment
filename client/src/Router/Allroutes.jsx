import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PythonMain from "../pages/python/PythonMain";
import SQLmain from "../pages/sql/SQLmain";
import JSmain from "../pages/javascript/JSmain";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/javascript" element={<JSmain />} />
      <Route path="/python" element={<PythonMain />} />
      <Route path="/sql" element={<SQLmain />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Allroutes;
