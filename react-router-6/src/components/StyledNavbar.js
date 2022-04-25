import { NavLink } from "react-router-dom";
import React from "react";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home{" "}
      </NavLink>
      <NavLink
        to="About"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="Products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
