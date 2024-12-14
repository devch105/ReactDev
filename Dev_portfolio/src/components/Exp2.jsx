import React from "react";
import { FaJava } from "react-icons/fa";

function Exp2() {
  return (
    <div className="Experiencecard text-yellow-200 text-[15px] bg-[#1B1B1A]  drop-shadow-xl border-[1px] border-[#6e6e6d] rounded-md w-3/5">
      <div className="pt-8 px-2 py-2 pb-2">
        <div className="flex justify-between ">
          <h1 className="text-[22px] font-semibold hover:text-blue-400">
            Java Programmer Intern{" "}
          </h1>
          <FaJava className="text-[20px]" />
        </div>
        <div className="flex justify-between p-2 ">
          <h4 className=" text-pretty">Codeclause.</h4>
        </div>
        <div className=" flex gap-2 flex-wrap pt-2">
          <h1 className="border-[1px] border-[#6e6e6d] p-1 rounded-md">
            {" "}
            Java{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Springboot
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d] rounded-md p-1">
            {" "}
            Spring MVC{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d] rounded-md  p-1">
            {" "}
            Hibernate{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Mysql{" "}
          </h1>
          <p className="p-2 hover:text-blue-400">
            {" "}
            I was interned at codeclause for the position of the java web
            development I had the opportunity to work on various tasks, enhance
            my skills, gain valuable skills in the field of java development and
            received my excellent performance award certificate by the code
            clause
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp2;
