import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
function CardContainer() {
  return (
    <div className="items-center  pt-4 pb-3">
      <h2 className="grad text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 text-center md:text-5xl p-4 hover:text-blue-400">
        My Projects
      </h2>
      <div className="grid place-items-center sm:grid-cols-1 lg:grid-cols-2 gap-4 m-4">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default CardContainer;
