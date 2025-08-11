import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 poppins-bold text-base-content py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        
        {/* Left: Branding */}
        <div className="text-center lg:text-left max-w-xs">
          <Link to="/" className="inline-block mb-3">
            <img
              className="w-20 mx-auto lg:mx-0"
              src="https://i.postimg.cc/hvRpjYcq/MAH1.png"
              alt="MAH"
            />
          </Link>
          <p className="inter text-primary mb-2 text-sm sm:text-base">
            MERN stack developer passionate about building clean, responsive, and user-friendly web applications.
          </p>
          <p className="inter text-[#efefef] text-xs sm:text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-4 sm:gap-5 text-lg sm:text-xl">
          <a
            href="https://facebook.com/azijulhakimbd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/azijulhakimbd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/azijulhakimbd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:azijul.info@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 text-base sm:text-lg">
          <Link to="/" className="btn btn-sm btn-ghost text-primary flex items-center gap-1 poppins-bold font-bold">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="btn btn-sm btn-ghost text-primary flex items-center gap-1 poppins-bold font-bold">
            <FaUser /> About
          </Link>
          <Link to="/skills" className="btn btn-sm btn-ghost text-primary flex items-center gap-1 poppins-bold font-bold">
            <FaCode /> Skills
          </Link>
          <Link to="/projects" className="btn btn-sm btn-ghost text-primary flex items-center gap-1 poppins-bold font-bold">
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/contact" className="btn btn-sm btn-ghost text-primary flex items-center gap-1 poppins-bold font-bold">
            <FaPaperPlane /> Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
