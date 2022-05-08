import React, { useState } from "react";

const Hookarray = () => {
  const [items, setitems] = useState([]);

  //function to add items
  // adding items in array , similarly we can add items to objects.
  // * here we are adding array of objects.

  function additems() {
    setitems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 100) },
    ]);
  }

  function reset() {
    setitems([]);
  }
  return (
    <div>
      <button onClick={additems}>Add Items</button>
      <button onClick={reset}>Reset list</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hookarray;
