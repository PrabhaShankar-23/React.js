import React, { useState } from "react";

const Hookinputs = () => {
  const [name, setname] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setname({ ...name, firstname: e.target.value })}
        />
        <br />
        <br />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setname({ ...name, lastname: e.target.value })}
        />
        <h2>FirstName: {name.firstname}</h2>
        <h2>SecondName: {name.lastname}</h2>
      </form>
    </div>
  );
};

export default Hookinputs;
