import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-dark bg-dark">
        <NavLink to="/">Curriculum</NavLink>
        <NavLink to="/downloads">Downloads</NavLink>
        <NavLink to="/journals">Journals</NavLink>
      </nav>
    </div>
  );
}
