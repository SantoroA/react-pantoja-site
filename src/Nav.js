import React from "react";

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
              Curriculum
            </NavLink>
            <NavLink className="nav-item nav-link" to="/downloads">
              Downloads
            </NavLink>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Publicações
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-item nav-link" to="/journals">
                  Journals
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
