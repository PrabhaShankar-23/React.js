import React from "react";
import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <>
      <h5>Products</h5>
      <Outlet />
    </>
  );
};

export default SharedProductLayout;
