import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Card = () => {
  return (
    <div className="grid ">
      <div className="flex  flex-cols-3 gap-10 justify-center w-full">
        <a href="https://github.com/devch105">
          <FaGithub className=" text-yellow-200 text-3xl hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/dev-dhama-nh3105/">
          <BsLinkedin className=" text-yellow-200 text-3xl hover:text-blue-400" />
        </a>
        <a href="https://x.com/DevDhama501">
          <FaSquareXTwitter className=" text-yellow-200 text-3xl hover:text-blue-400" />
        </a>
      </div>
      <div className="flex pt-2 flex-cols-2 gap-2 justify-center w-full  text-yellow-200 ">
        <CiMail className="text-2xl " />
        <h1 className="text-1xl">devdhama23@gmail.com</h1>
      </div>
      <h1 className="text-1xl pl-5">Made by : Dev Dhama</h1>
    </div>
  );
};

export default Card;
