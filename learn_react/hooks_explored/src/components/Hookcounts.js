import React, { useState } from "react";

const Hookcounts = () => {
  const [count, setcount] = useState(0);
  function plus5() {
    for (let i = 1; i < 6; i++) {
      // setcount(() => count + 1);
      setcount((prevcount) => prevcount + 1);
    }
  }
  return (
    <div>
      <div>counter : {count}</div>
      <button onClick={() => setcount(count + 1)}>Increment: {count}</button>
      <button onClick={() => setcount(count - 1)}>Decrement: {count}</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={plus5}>Increment by 5</button>
    </div>
  );
};

export default Hookcounts;
