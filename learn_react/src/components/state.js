import React, { useState } from "react";

const State = () => {
  const [message, setmessage] = useState("hello!");
  console.log(message, setmessage);
  function display() {
    setmessage("State Hello");
    console.log("Double Hello");
  }
  //   setmessage("bye");

  return (
    <div>
      {message}
      <button onClick={display}>display</button>
    </div>
  );
};

export default State;
