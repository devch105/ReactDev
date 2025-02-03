import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
function CardContainer() {
  return (
    <div className="items-center  pt-4 pb-3">
      <h2 className="grad text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 text-center md:text-5xl p-4 hover:text-blue-400">
        My Projects
      </h2>
      <div className="flex flex-wrap gap-8 justify-center ">
        <Card5 className="classcomponent" />
        <Card1 className="classcomponent" />
        <Card2 className="classcomponent" />
        <Card3 className="classcomponent" />
        <Card4 className="classcomponent" />
      </div>
    </div>
  );
}

export default CardContainer;
