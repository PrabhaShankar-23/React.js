import React from "react";
import Jokes from "./components/Jokes";
export default function App() {
  return (
    <div>
      <Jokes
        setup=" Who's there??? shouted the wrestler"
        punchline="God of Corona!"
        ispun={true}
        upvotes={10}
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }, {}]}
      />
      <Jokes
        setup=" The more you weigh, the harder you are to kidnap"
        punchline="Keep eating cake"
      />
      <Jokes
        setup=""
        punchline="Why they call it rush hour, when nothing moves."
      />
      <Jokes
        setup=" Who's there??? shouted the wretler"
        punchline="God of Corona!"
      />
      <Jokes
        setup=" Who's there??? shouted the wretler"
        punchline="God of Corona!"
      />
      <Jokes
        setup=" Who's there??? shouted the wretler"
        punchline="God of Corona!"
      />
    </div>
  );
}
