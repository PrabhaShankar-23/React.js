import React from "react";
// import whiskaz from "../images/mr-whiskerson.png";

export default function Card(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={props.icon_phone} />
        <p>{props.contact}</p>
      </div>
      <div className="info-group">
        <img src={props.icon_mail} />
        <p>{props.mail_id}</p>
      </div>
    </div>
  );
}
