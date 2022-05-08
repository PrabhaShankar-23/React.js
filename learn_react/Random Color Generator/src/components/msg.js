import React from "react";

export default function msg() {
  const a = [1, 2, 3, 5];
  const squared = a.map((num) => {
    return num * num;
  });

  // console.log(squared);
  return (
    <div>
      <p>Helloo World</p>
      <p> {squared} </p>
    </div>
  );
}
