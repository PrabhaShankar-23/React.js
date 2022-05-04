import React, { useState } from "react";
import Msg from "./components/msg.js";
import State from "./components/state.js";
// import { useState } from "react";

export default function App() {
  return (
    <div>
      <Msg />
      <State />
    </div>
  );
}
