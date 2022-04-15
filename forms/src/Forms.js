import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" });

  console.log(formData);

  function handlechange(event) {
    console.log(event.target.value);
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
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
          onChange={handlechange}
        />
        <br />
        <br />
      </form>

      <button> Submit</button>
    </div>
  );
}
