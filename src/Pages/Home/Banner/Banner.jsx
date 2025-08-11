import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaMouse } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:pt-20 pt-6 relative overflow-hidden px-4 sm:px-8">
      {/* Abstract Dotted Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{ zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#a3a3a3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative z-10 hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-30 max-w-7xl mx-auto w-full">
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="https://i.postimg.cc/s1dqcbRW/Md-Azijul-Hakim.jpg"
          alt="Md. Azijul Hakim"
          className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-xl shadow-2xl border-4 border-primary"
          loading="lazy"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-left max-w-lg"
        >
          <h1 className="poppins-bold text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m <br /><span className="text-primary">Md. Azijul Hakim</span>
          </h1>
          <p className="inter py-4 text-lg sm:text-xl">
            A passionate{" "}
            <span className="font-semibold text-secondary">Frontend Developer</span>{" "}
            crafting elegant, responsive web apps.
          </p>

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1PYkcLkx86rO7tMKc0nNcTfju0y6gHmRV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fira-sans-bold btn btn-primary w-full sm:w-auto sm:px-10"
          >
            📄 Download Resume
          </motion.a>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center lg:justify-start gap-6 text-3xl mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              {
                href: "https://github.com/azijulhakimbd",
                icon: <FaGithub />,
              },
              {
                href: "https://linkedin.com/in/azijulhakimbd",
                icon: <FaLinkedin />,
              },
              {
                href: "https://facebook.com/azijulhakimbd",
                icon: <FaFacebook />,
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center animate-bounce text-primary select-none">
          <FaMouse size={15} />
          <span className="text-sm fira-sans-bold font-bold">Scroll</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
