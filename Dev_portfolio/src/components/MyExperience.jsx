import React from "react";
import Exp1 from "./Exp1";
import Exp2 from "./Exp2";

function MyExperience() {
  return (
    <div className="  p-5   ">
      <h2 className="grad text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 text-center md:text-5xl p-4 hover:text-blue-400">
        {" "}
        My Experience
      </h2>
      <div className="flex flex-col-2 flex-wrap gap-8 place-content-center sm:min-w-2">
        <Exp1 />
        <Exp2 />
      </div>
    </div>
  );
}

export default MyExperience;
