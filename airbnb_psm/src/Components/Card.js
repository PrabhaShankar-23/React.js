import React from "react";
import zafers from "../images/image 12.png";
import star from "../images/Star 1.png";

// Mental mapping of eachpart before executing such like when making decision for each part.
// Broken links are seen or we see that import of image file is required rather than links in img element.
export default function Card() {
  return (
    <div className="card--section">
      <img src={zafers} alt="Zafers" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="Red star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6). </span>
        <span className="gray"> USA </span>
      </div>
      <p>Life lessons with Katie Zafers</p>
      <p>
        <strong>136$</strong> /person
      </p>
    </div>
  );
}
