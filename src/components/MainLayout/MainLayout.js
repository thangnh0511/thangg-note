import React from "react";
import { Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RoutesPath from "../Routes/Routes";
import Main from "./MainContent/Main";
import { Nav } from "./Nav/Nav";

export default function MainLayout() {
  return (
    <div className="notebook-wrap">
      <Nav />
      <RoutesPath />

      {}
      {/* <RoutesPath/> */}
      {/* <Main/> */}
    </div>
  );
}
