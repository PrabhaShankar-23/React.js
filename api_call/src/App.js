import React from "react";

export default function App() {
  const [starwarsdata, setStarswarsdata] = React.useState({});
  console.log("Render loop");
  fetch("https://swapi.dev/api/people/1/")
    .then((rest) => rest.json())
    // .then((data) => setStarswarsdata(data));
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Hello world, where is SuperMan!</h1>
      <pre>{JSON.stringify(starwarsdata, null, 2)}</pre>
    </div>
  );
}
