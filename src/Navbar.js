
// src/navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Hi, I'm Jony.
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="./Projects" className="nav-link">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="./Research" className="nav-link">
            Research
          </NavLink>
        </li>
        <li className="nav-item">
        <a href="https://jomoslomo.github.io/web/JonathanMorseCV.pdf" download="JonathanMorseCV.pdf" className="nav-link" target="_blank">
  Download CV
</a>




        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
