import React from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card">
        <Card
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zafers"
          price={136}
        />

        <Card
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zafers"
          price={136}
        />
        <Card
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zafers"
          price={136}
        />
      </div>
    </div>
  );
}
