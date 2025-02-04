import React from "react";
import profile from "../assets/Profile.jpg";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="Hero p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-transparent">
          <div className="place-items-center">
            <div>
              <h1 className="name  text-red-400 text-[30px] ">
                Hello, I'm Dev Dhama
              </h1>
              <h1 className="font-extrabold text-[55px] text-yellow-200">
                Professional <br />
                Full Stack <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 ">
                  Web Developer
                </span>
              </h1>
              <h1 className="font-bold bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-red-600">
                Welcome to my portfolio
              </h1>
              <div>
                <button className="text-white mt-4 text-[18px] bg-gradient-to-r from-blue-500 to-red-600 px-3 pb-2 py-1 rounded-full hover:scale-110 transition-all ease-in-out duration-300 mr-3">
                  <a href="https://drive.google.com/file/d/1r1ppwBt5k8HKTMh4TWPuxfLetfDrNxwL/view?usp=drivesdk">
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="place-items-center mt-4">
            <img
              src={profile}
              className="pic rounded-full border-4 border-solid border-x-red-300 border-y-yellow-200 hover:scale-110 transition-all ease-in-out duration-300
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
