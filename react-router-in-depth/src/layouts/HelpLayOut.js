import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayOut() {
  return (
    <div className="help-layout">
      <h2>HelpLayOut</h2>
      <p>Loream</p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contant</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
