import React from "react";
import docsimg from "../assets/docslogo.png";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

function Card1() {
  return (
    <div>
      <div className="card  w-96 shadow-xl bg-[#1B1B1A] text-yellow-200 border-[1px]  border-[#6e6e6d] rounded-md p-2 ">
        <h2 className="card-title font-semibold text-4xl hover:text-blue-400 ">
          Docs App
        </h2>
        <figure className="pt-3 pb-1">
          <img src={docsimg} alt="Project 1" />
        </figure>
        <div className="card-body ">
          <p className=" hover:text-blue-400">
            Introducing Mini Quick Note, the sleek and intuitive app designed to
            help you capture your thoughts, reminders, and ideas in an instant.
            Whether you're a busy professional, a student, or anyone in between,
            this app is your go-to solution for staying organized and
            productive.
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

export default Card1;
