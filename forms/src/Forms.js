import React, { useState } from "react";

export default function Forms() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  console.log(firstname, lastname);
  function handlechange(event) {
    // console.log(event.target.value);
    // console.log("oh! I see a change ");
    setFirstname(event.target.value);
  }

  function handlechange2(event) {
    // console.log(event.target.value);
    // console.log("oh! I see a change ");
    setLastname(event.target.value);
  }

  return (
    <div>
      <form action="">
        <label for="first-name"> First Name : </label>
        <input
          type="text"
          id="first-name"
          className="input"
          name="firstname"
          placeholder="firstname"
          onChange={handlechange}
        />

        <br />
        <br />

        <label for="last-name"> Last Name : </label>
        <input
          type="text"
          id="last-name"
          className="input"
          name="lastname"
          placeholder="lastname"
          onChange={handlechange2}
        />
        <br />
        <br />
      </form>

      <button> Submit</button>
    </div>
  );
}
