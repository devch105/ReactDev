import React from "react";
import myntrologo from "../assets/myntralogo.png";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

function Card2() {
  return (
    <div>
      <div>
        <div className="card  w-96 shadow-xl  bg-[#1B1B1A] text-yellow-200 border-[1px]  border-[#6e6e6d] rounded-md p-2">
          <h2 className="card-title font-semibold text-4xl hover:text-blue-400 ">
            Myntra Clone
          </h2>
          <figure className="pt-3 pb-1">
            <img src={myntrologo} alt="Project 2" />
          </figure>
          <div className="card-body ">
            <p className=" hover:text-blue-400">
              Myntra clone app built for the enhancing the basic foundation of
              web Development which involves understanding of skills such as
              Html , CSS and javascript.
            </p>
            <div className="card-actions flex gap-2 justify-end mt-2">
              <div>
                <a href="https://github.com/devch105/Myntra-clone">
                  {" "}
                  <FaGithub />
                </a>
              </div>
              <div>
                <a href="https://myntra-clone-two-mu.vercel.app/">
                  <IoMdGlobe />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
