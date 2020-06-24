import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/">Curriculum</NavLink>
      <NavLink to="/downloads">Downloads</NavLink>
      <NavLink to="/journals">Journals</NavLink>
    </div>
  );
}