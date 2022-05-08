import React, { useState } from "react";

const State = () => {
  // const [message, setmessage] = useState("hello!");
  const [count, setcount] = useState(0);

  const [buttonStyle, setbuttonStyle] = useState({
    backgroundColor: "#fff000",
  });

  // const [divStyle, setdivStyle] = useState({
  //   backgroundColor: "#fff000",
  // });
  // console.log(message, setmessage);
  // function to get the random color.
  function display() {
    // setmessage("State Hello");
    setcount(count + 1);
    function rainbow() {
      const spectrum = "0123456789ABCDEF";
      let colour = "#";
      for (let i = 0; i < 6; i++) {
        colour += spectrum[Math.floor(Math.random() * 16)];
      }
      return colour;
    }

    // setdivStyle({ backgroundColor: rainbow() });
    setbuttonStyle({ backgroundColor: rainbow() });
    // setbuttonStyle({ backgroundColor: "#ff5634" });
  }

  return (
    <div>
      {/* {message} */}
      <button style={buttonStyle} onClick={display}>
        display {count}
      </button>
      {/* <div style={divStyle} className="RocknRoll">
        Here we go!
      </div> */}
    </div>
  );
};

export default State;
