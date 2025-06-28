import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Profile Image */}
        <img
          src="https://i.postimg.cc/ZRPRzxy4/Md-Azijul-Hakim.jpg"
          alt="Md. Azijul Hakim"
          className="w-48 sm:w-64 rounded-lg shadow-2xl border-4 border-primary"
          loading="lazy"
        />

        {/* Text & Actions */}
        <div className="text-center lg:text-left text-base-content">
          <h1 className="text-4xl font-bold">
            Hi, I’m <span className="text-primary">Md. Azijul Hakim</span>
          </h1>
          <p className="py-3 text-lg">
            A passionate{" "}
            <span className="font-semibold text-secondary">
              Frontend Developer
            </span>{" "}
            crafting elegant, responsive web apps.
          </p>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1aF1p8KBij2UPkRaQZEk9yRX-Yb4Is5EK/view?usp=sharing"
            download
            className="btn btn-primary mt-2 w-52"
          >
            📄 Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 text-2xl mt-6">
            <a
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
