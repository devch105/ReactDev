import React from "react";
import Marquee from "react-fast-marquee";
function Skills() {
  const core = [
    "Java",
    "Javascript",
    "C/C++",

    "Python",
    "SQL",
    "React",
    "Spring Boot",
    "Hibernate",
    "AWS",
    "Docker",
    "Tailwind",
    "Bootstrap",
  ];

  const others = [
    "Firebase",
    "MongoDB",
    "Git",
    "GitHub",
    "REST API",
    "Jupyter Notebook",
    "Eclipse",
    "Intelli J",
    "VS Code",
    "Figma",
  ];
  return (
    <section id="skills" className="Skills m-3 pt-3 pb-4">
      <div className="max-w-4xl mx-auto  flex items-center justify-center px-3">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="grad text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 text-center p-4 hover:text-blue-400">
            Skills
          </h2>
          <Marquee autoFill pauseOnHover className="mask-corner">
            {core.map((tech, index) => (
              <div key={index} className="cursor-pointer">
                <span className="bg-[#1B1B1A] text-yellow-200 text-xl border-[2px] border-[#252524] rounded-md m-2 py-2 px-4 inline-block">
                  {tech}
                </span>
              </div>
            ))}
          </Marquee>
          <br />
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            className="mask-corner"
          >
            {others.map((tech, index) => (
              <div key={index} className="cursor-pointer">
                <span className="bg-[#1B1B1A] text-yellow-200 text-xl border-[2px] border-[#252524] rounded-md m-2 py-2 px-4 inline-block">
                  {tech}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;
