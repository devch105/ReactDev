import React from "react";

function About() {
  return (
    <section id="about" className="about m-3 pb-3">
      <div className="about-container  place-items-center ">
        <h2 className="grad text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400  text-center md:text-6xl p-4 hover:text-blue-400">
          About me
        </h2>
        <div className=" aboutdiv   w-4/6 mb-3">
          {" "}
          <p className="  h-auto  text-center text-wrap text-yellow-200 hover:text-blue-400 text-2xl">
            I am currently pursuing my Bachelor's degree in Computer Science
            Engineering at IMS Engineering College, where I have gained a solid
            foundation in various programming languages, algorithms, and
            software engineering principles. Throughout my coursework, I have
            successfully completed projects that have honed my problem-solving
            skills and fostered my ability to work both independently and
            collaboratively.In addition to my academic qualifications, I am also
            regularly engage in personal coding projects, where I explore new
            technologies and frameworks to broaden my knowledge base.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
