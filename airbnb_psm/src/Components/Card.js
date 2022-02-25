import React from "react";
import zafers from "../images/image 12.png";

// Mental mapping of eachpart before executing such like when making decision for each part.
// Broken links are seen or we see that import of image file is required rather than links in img element.
export default function Card() {
  return (
    <div className="card--section">
      <img src={zafers} alt="Zafers" />
    </div>
  );
}
