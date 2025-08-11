import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import ToggleTheme from "../../../Components/ToggleTheme";

// React Icons
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className={`flex items-center px-3 py-1 rounded ${
            currentPath === "/" ? "bg-primary text-white" : "hover:bg-base-200"
          }`}
        >
          <FaHome size={20} className="mr-1" /> Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`flex items-center px-3 py-1 rounded ${
            currentPath === "/about"
              ? "bg-primary text-white"
              : "hover:bg-base-200"
          }`}
        >
          <FaUser size={20} className="mr-1" /> About
        </Link>
      </li>
      <li>
        <Link
          to="/skills"
          className={`flex items-center px-3 py-1 rounded ${
            currentPath === "/skills"
              ? "bg-primary text-white"
              : "hover:bg-base-200"
          }`}
        >
          <FaCode size={20} className="mr-1" /> Skills
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className={`flex items-center px-3 py-1 rounded ${
            currentPath === "/projects"
              ? "bg-primary text-white"
              : "hover:bg-base-200"
          }`}
        >
          <FaProjectDiagram size={20} className="mr-1" /> Projects
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`flex items-center px-3 py-1 rounded ${
            currentPath === "/contact"
              ? "bg-primary text-white"
              : "hover:bg-base-200"
          }`}
        >
          <FaEnvelope size={20} className="mr-1" /> Contact
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar shadow fixed z-50 top-0 w-full px-5 lg:px-20 poppins-bold transition-all duration-300 ${
        isScrolled ? "bg-base-100/5 backdrop-blur-md shadow-sm" : "bg-base-100"
      }`}
    >
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          <img
            className="w-20"
            src="https://i.postimg.cc/hvRpjYcq/MAH1.png"
            alt="MAH"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Desktop nav links */}
      <div className="navbar-center text-primary hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* End: Theme toggle, resume, menu */}
      <div className="navbar-end flex items-center gap-2">
        <ToggleTheme />
        <a
          className="btn btn-primary btn-sm flex items-center gap-1"
          href="https://drive.google.com/file/d/1PYkcLkx86rO7tMKc0nNcTfju0y6gHmRV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt /> Resume
        </a>

        {/* Mobile dropdown menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
