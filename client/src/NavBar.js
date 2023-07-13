import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>Portfolio</h1>{' '}

      <div className="nav-links-container">
        {/* <div className="nav-links"> */}
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/projects">Projects</Link>{' '}
          <Link to="/blog">Blog</Link>{' '}
        {/* </div> */}

      </div>
    </div>
  );
};
