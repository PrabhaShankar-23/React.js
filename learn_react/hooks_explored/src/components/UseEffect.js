import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [count, setcount] = useState(0);
  function Increment() {
    setcount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect being used!");
    document.title = `You clicked ${count} times!`;
  }, [count]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={Increment}>Update</button>
    </div>
  );
};

export default UseEffect2;
