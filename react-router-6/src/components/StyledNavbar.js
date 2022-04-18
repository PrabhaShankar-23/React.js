import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        // style={({ isActive }) => {
        //   return { color: isActive ? "red" : "grey" };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink to="/About">About</NavLink>
      <NavLink to="/Products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
