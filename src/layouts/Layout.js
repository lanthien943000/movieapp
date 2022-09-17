import React from "react";
import { Outlet } from "react-router-dom";
import IntroMovie from "../components/IntroMovie";
import HomePage from "../pages/HomePage";

function Layout() {
  return (
    <>
      <IntroMovie />
      <HomePage />
      <Outlet />
    </>
  );
}

export default Layout;
