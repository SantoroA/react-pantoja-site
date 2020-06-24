import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Navbar">
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
  );
}
