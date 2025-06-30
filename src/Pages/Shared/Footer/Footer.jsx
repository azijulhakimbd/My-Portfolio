import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router"; 

const Footer = () => {
  return (
    <footer className="bg-base-200 poppins-bold text-base-content py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left: Branding */}
        <div className="text-center lg:text-left">
          <Link to="/" className="inline-block mb-2">
            <img
              className="w-20 mx-auto lg:mx-0"
              src="https://i.postimg.cc/hvRpjYcq/MAH1.png"
              alt="MAH"
            />
          </Link>
          <p className="inter text-primary">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://facebook.com/azijulhakimbd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebookF />
          </a>
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
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:azijul.info@gmail.com"
            className="hover:text-primary"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 text-lg">
          <Link to="/" className="btn btn-sm btn-ghost text-primary">Home</Link>
          <Link to="/about" className="btn btn-sm btn-ghost text-primary">About</Link>
          <Link to="/skills" className="btn btn-sm btn-ghost text-primary">Skills</Link>
          <Link to="/projects" className="btn btn-sm btn-ghost text-primary">Projects</Link>
          <Link to="/contact" className="btn btn-sm btn-ghost text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
