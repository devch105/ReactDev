import React from "react";
import house from "../assets/house.png";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

function Card3() {
  return (
    <div>
      <div>
        <div className="card  w-96 shadow-xl  bg-[#1B1B1A] text-yellow-200 border-[1px]  border-[#6e6e6d] rounded-md p-2">
          <h2 className="card-title font-semibold text-4xl hover:text-blue-400 ">
            House Price Prediction
          </h2>
          <figure className="pt-3 pb-1">
            <img src={house} alt="Project 1" />
          </figure>
          <div className="card-body ">
            <p className=" hover:text-blue-400">
              House price prediction is a critical area in real estate
              analytics, leveraging various machine learning techniques to
              estimate the market value of residential properties. This process
              is essential for buyers, sellers, and investors to make informed
              decisions based on accurate price forecasts.
            </p>
            <div className="card-actions flex gap-2 justify-end mt-2">
              <div>
                <a href="https://github.com/devch105/Data-Science-and-ML">
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
    </div>
  );
}

export default Card3;
