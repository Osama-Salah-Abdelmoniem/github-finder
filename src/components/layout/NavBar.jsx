import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-white inline pr-2 text-3xl" />
          <Link to="/" className="text-lg text-white font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px2-mx2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
NavBar.defaultProps = {
  title: "Github Finder",
};

export default NavBar;
