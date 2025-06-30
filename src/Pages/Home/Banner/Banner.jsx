import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaMouse } from "react-icons/fa";

const Banner = () => {
  return (
    <div data-aos="fade-left" className="hero min-h-screen bg-base-200 pt-20 relative">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-30">
        {/* Profile Image (larger) */}
        <img
          src="https://i.postimg.cc/ZRPRzxy4/Md-Azijul-Hakim.jpg"
          alt="Md. Azijul Hakim"
          className="w-64 sm:w-80 rounded-xl shadow-2xl border-4 border-primary"
          loading="lazy"
        />

        {/* Text & Actions */}
        <div className="text-center lg:text-left text-base-content">
          <h1 className="poppins-bold text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-primary">Md. Azijul Hakim</span>
          </h1>
          <p className="inter py-4 text-lg md:text-xl">
            A passionate{" "}
            <span className="font-semibold text-secondary">
              Frontend Developer
            </span>{" "}
            crafting elegant, responsive web apps.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1aF1p8KBij2UPkRaQZEk9yRX-Yb4Is5EK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fira-sans-bold btn btn-primary mt-2 w-52"
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

      {/* Scroll Down Animation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce text-primary">
          <FaMouse className="text-2xl" />
          <span className="text-sm mt-1 fira-sans-bold font-bold">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
