import React from "react";
import Jokes from "./components/Jokes";
import Jokesdata from "./jokesdata";

export default function App() {
  const jokeElements = Jokesdata.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
