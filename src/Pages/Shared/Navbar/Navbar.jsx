import { Link } from "react-router";
import ToggleTheme from "../../../Components/ToggleTheme";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed z-50 top-0 px-5 lg:px-10">
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* End: Theme toggle, resume, menu */}
      <div className="navbar-end flex items-center gap-2">
        {/* Theme toggle always visible */}
        <ToggleTheme />

        {/* Resume button for desktop */}
        <Link
          className="btn btn-info text-center"
          to="https://drive.google.com/file/d/1aF1p8KBij2UPkRaQZEk9yRX-Yb4Is5EK/view?usp=sharing"
        >
         
          Resume
        </Link>

        {/* Mobile dropdown menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
