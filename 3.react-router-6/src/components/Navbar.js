import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home </Link>
      <Link to="About">About</Link>
      <Link to="Products">Products</Link>
    </nav>
  );
};
