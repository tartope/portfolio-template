import React from "react";
import { Link } from "react-router-dom";

// import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div class="container-fluid">
        <h1>Portfolio</h1>

        <div class="collapse navbar-collapse" id="navbarColor01">

          <ul class="navbar-nav me-auto">

            <li class="nav-item">
              <Link to="/" class="nav-link active" href="#">Home
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link active" href="#">About
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/projects" class="nav-link active" href="#">Projects
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" class="nav-link active" href="#">Blog
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};
