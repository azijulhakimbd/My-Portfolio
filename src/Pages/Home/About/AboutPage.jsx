import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const AboutPage = () => {
  return (
    <section className="px-4 py-24 bg-base-100 text-base-content min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Profile Image with Spinning Logos */}
        <div className="relative flex justify-center items-center">
          {/* Profile Image */}
          <img
            src="https://i.postimg.cc/VvL4StR9/WEB.jpg"
            alt="Azijul Hakim"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-primary z-10"
          />

          {/* Spinning Circle with Logos */}
          <div className="absolute w-80 h-80 rounded-full animate-spin-slow z-0 flex justify-center items-center">
            <div className="absolute top-0">
              <SiMongodb
                size={30}
                className="text-green-600 shadow-2xl text-xl md:text-2xl"
              />
            </div>
            <div className="absolute bottom-0">
              <FaNodeJs
                size={30}
                className="text-green-700 shadow-2xl text-xl md:text-2xl"
              />
            </div>
            <div className="absolute left-0">
              <SiExpress
                size={30}
                className="text-gray-800 shadow-2xl text-xl md:text-2xl"
              />
            </div>
            <div className="absolute right-0">
              <SiReact
                size={30}
                className="text-cyan-500 shadow-2xl text-xl md:text-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="space-grotesk text-3xl md:text-4xl font-bold text-primary mb-4">
            Hi, I'm Md. Azijul Hakim
          </h1>
          <p className="text-base fira-sans-bold leading-relaxed mb-4">
            A passionate{" "}
            <span className="font-semibold">Front-End Developer</span> based in
            <span className="text-primary"> Nalitabari, Sherpur</span>. I
            specialize in building modern, user-friendly web applications using
            technologies like React, Tailwind CSS, Firebase, and Express.js. I'm
            dedicated to writing clean, efficient code and constantly improving
            my skills.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 inter mb-6">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> azijul.info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" /> +880 1758 52 4125
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Nalitabari, Sherpur,
              Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <SiGithub className="text-primary" />
              <a
                href="https://github.com/azijulhakimbd"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/azijulhakimbd
              </a>
            </p>
            <p className="flex items-center gap-2">
              <SiLinkedin className="text-primary" />
              <a
                href="https://www.linkedin.com/in/azijulhakimbd"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/azijulhakimbd
              </a>
            </p>
          </div>

          {/* Resume Download */}
          <a
            href="https://drive.google.com/file/d/1aF1p8KBij2UPkRaQZEk9yRX-Yb4Is5EK/view?usp=sharing"
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      

      {/* Personal Highlights */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="rubik text-xl font-semibold text-primary mb-3">
          Personal Highlights
        </h2>
        <ul className="fira-sans-bold list-disc list-inside text-sm space-y-1">
          <li>🌍 Built 5+ full-stack projects using MERN stack</li>
          <li>🚀 Deployed apps on Netlify & Firebase with real users</li>
          <li>🔒 Implemented secure JWT-based authentication</li>
          <li>📊 Passionate about clean UI, charts, and dashboards</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
