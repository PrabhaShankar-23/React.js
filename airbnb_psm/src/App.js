import React from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import cardData from "./cardData";

export default function App() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewcount}
        // country={card.stats.country}
        // title={card.title}
        // price={card.price}
        // openspots={card.openSpots}
        // location={card.location}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card">{cards}</div>
    </div>
  );
}
