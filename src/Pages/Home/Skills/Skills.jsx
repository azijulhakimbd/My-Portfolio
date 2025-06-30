import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Marquee from "react-fast-marquee";
import { IoLogoVercel } from "react-icons/io5";
import JWT from "../../../assets/JWT.png";
const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
      level: 80,
    },
    { name: "React", icon: <FaReact className="text-cyan-500" />, level: 85 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      level: 90,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      level: 75,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
      level: 70,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      level: 70,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      level: 80,
    },
    {
      name: "JWT",
      icon: <img src={JWT} alt="JWT" className="w-6 h-6" />,
      level: 70,
    },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 85 },
    {
      name: "VS Code",
      icon: <VscVscode className="text-blue-600" />,
      level: 90,
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-[#32E6E2]" />,
      level: 95,
    },
    {
      name: "Vercel",
      icon: <IoLogoVercel className="text-white bg-black rounded-2xl p-1" />,
      level: 95,
    },
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 80 },
  ],
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-start poppins-bold text-primary mb-10">
        My Skills
      </h2>

      {/* Marquee of icons */}
      <Marquee speed={50} gradient={false} className="mb-10">
        {Object.values(skillsData)
          .flat()
          .map((skill, index) => (
            <div
              key={index}
              className="mx-6 text-5xl tooltip"
              data-tip={skill.name}
            >
              <div className="hover:scale-110 duration-300">{skill.icon}</div>
            </div>
          ))}
      </Marquee>

      {/* Skill categories */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-base-100 rounded-xl shadow-lg p-6 transition hover:shadow-xl"
          >
            <h3 className="text-xl poppins-bold font-semibold text-secondary mb-4">
              {category}
            </h3>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium rubik">{skill.name}</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={skill.level}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
