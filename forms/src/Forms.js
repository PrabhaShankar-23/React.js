import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    text: "",
    isok: false,
    employment: "",
    color: "",
  });

  function handlechange(event) {
    const { name, value, type, checked } = event.target;
    // console.log(event.target.type);
    // console.log(event.target.value);
    setFormData((prevData) => {
      // return { ...prevData, [event.target.name]: event.target.value };
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <label for="first-name"> First Name : </label>
        <input
          type="text"
          id="first-name"
          className="input"
          name="firstname"
          placeholder="firstname"
          onChange={handlechange}
          value={formData.firstname}
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
          value={formData.lastname}
        />
        <br />
        <br />

        <label for="email"> E-Mail : </label>
        <input
          type="email"
          id="email"
          className="email"
          name="email"
          placeholder="xyz@hero.com"
          onChange={handlechange}
          value={formData.email}
        />
        <br />
        <br />

        <textarea
          value={formData.text}
          onChange={handlechange}
          placeholder="Bindass bol"
          name="text"
        />

        <br />
        <br />

        <input
          type="checkbox"
          id="isok"
          name="isok"
          checked={formData.isok}
          onChange={handlechange}
        />
        <label htmlFor="isok">
          Friend with checkbox, click me to access checkbox
        </label>
        <br />
        <br />
        <fieldset>
          <legend>Current Employment Status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handlechange}
          />
          <label htmlFor="unemployed">unemployed</label>
          <br />
          <input
            type="radio"
            id="Part-Time"
            name="employment"
            value="Part-Time"
            checked={formData.employment === "Part-Time"}
            onChange={handlechange}
          />
          <label htmlFor="Part-Time">Part-Time</label>
          <br />
          <input
            type="radio"
            id="Full-time"
            name="employment"
            value="Full-time"
            checked={formData.employment === "Full-time"}
            onChange={handlechange}
          />
          <label htmlFor="Full-time">Full-time</label>
          <br />
          <br />
        </fieldset>
        <br />
        <label htmlFor="favcolor">What is your favourite Color?</label>
        <select
          name="color"
          id="favcolor"
          onChange={handlechange}
          value={formData.color}
        >
          <option value="">Choose color</option>
          <option value="Orange">Orange</option>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="MehndiGreen">MehndiGreen</option>
          <option value="Black">Black</option>
          <option value="Grey">Grey</option>
        </select>
        <br />
        <br />
        <button> Submit</button>
      </form>
    </div>
  );
}
