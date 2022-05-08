import React from "react";
import Compo_B from "./Compo_B";
import Compo_C from "./Compo_C";

const Compo_A = () => {
  return (
    <div>
      Compo_A
      <Compo_B />
      <Compo_C />
    </div>
  );
};

export default Compo_A;
