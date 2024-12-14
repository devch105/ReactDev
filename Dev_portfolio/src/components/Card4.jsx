import React from "react";
import card4 from "../assets/card4.jpg";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

function Card4() {
  return (
    <div>
      <div className="card  w-96 shadow-xl bg-[#1B1B1A] text-yellow-200 border-[1px]  border-[#6e6e6d] rounded-md p-2">
        <h2 className="card-title font-semibold text-4xl  hover:text-blue-400">
          Spring Sprint
        </h2>
        <figure className="pt-3 pb-1">
          <img src={card4} alt="Project 1" />
        </figure>
        <div className="card-body ">
          <p className=" hover:text-blue-400">
            Directed the full-stack development, emphasizing a smooth flow,
            dynamic frontend & robust data management. Conducted thorough
            testing to validate optimal performance and ensure the functionality
            of CRUD operations
          </p>
          <div className="card-actions flex gap-2 justify-end mt-2">
            <div>
              <a href="">
                {" "}
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="">
                <IoMdGlobe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
