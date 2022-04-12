import React from "react";

export default function Jokes(joke) {
  return (
    <div>
      {joke.setup && <h3>Setup : {joke.setup}</h3>}
      <p> Punchline : {joke.punchline}</p>
      <hr />
    </div>
  );
}
