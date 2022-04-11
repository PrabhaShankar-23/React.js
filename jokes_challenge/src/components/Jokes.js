import React from "react";

export default function Jokes(joke) {
  console.log(joke.comments);
  return (
    <div>
      {joke.setup && <h3>Setup : {joke.setup}</h3>}
      <p> Punchline : {joke.punchline}</p>
      <hr />
    </div>
  );
}
