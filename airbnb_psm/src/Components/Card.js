import React from "react";
// import zafers from "../images/image 12.png";
// import star from "../images/Star 1.png";

// Mental mapping of eachpart before executing such like when making decision for each part.
// Broken links are seen or we see that import of image file is required rather than links in img element.

export default function Card(props) {
  return (
    <div className="card--section">
      <img src={`./images/${props.img}`} alt="Zafers" className="card--image" />
      <div className="card--stats">
        <img src="./images/Star 1.png" alt="Red star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}). </span>
        <span className="gray"> {props.country} </span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>{props.price}$</strong> /person
      </p>
    </div>
  );
}
