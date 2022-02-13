import React from "react";
import airbnblogo from "../images/airbnb 1.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={airbnblogo} className="nav--logo"></img>
      </nav>
    </div>
  );
}
