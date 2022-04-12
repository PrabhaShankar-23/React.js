import React from "react";
// Mental mapping of eachpart before executing such like when making decision for each part.
// Broken links are seen or we see that import of image file is required rather than links in img element.

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card--section">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img
        src={`./images/${props.card.coverImg}`}
        alt="Zafers"
        className="card--image"
      />
      <div className="card--stats">
        <img src="./images/Star 1.png" alt="Red star" className="card--star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewcount}). </span>
        <span className="gray"> {props.card.stats.country} </span>
      </div>
      <p>{props.card.title}</p>
      <p>
        <strong>{props.card.price}$</strong> /person
      </p>
    </div>
  );
}
