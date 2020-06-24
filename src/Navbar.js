import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Curriculum
          </NavLink>
          <NavLink className="nav-item nav-link" to="/downloads">
            Downloads
          </NavLink>
          <NavLink className="nav-item nav-link" to="/journals">
            Journals
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
