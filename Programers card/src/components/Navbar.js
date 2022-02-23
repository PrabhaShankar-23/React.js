import React from "react";
import practiceLogo from "../images/saraswati.jpg";

// We are importing image from the folder with this path because when the webpack bundler
// will bundle all the apps then it is going to have absolute path rather than broken links.
export default function Navbar() {
  return (
    <headers>
      <nav className="nav-el">
        <img src={practiceLogo} className="nav-logo"></img>
        <h3>Practice React</h3>
        <ul className="nav-items">
          <li>About</li>
          <li>Problems Practiced</li>
          <li>Projects </li>
        </ul>
      </nav>
    </headers>
  );
}
