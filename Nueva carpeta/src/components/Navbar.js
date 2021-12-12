import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Ducks & People
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/ducks">
            Patitos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            Acerca De
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
