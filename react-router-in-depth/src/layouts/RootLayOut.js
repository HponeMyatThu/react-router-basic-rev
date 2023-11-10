import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

export default function RootLayOut() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Title</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
        <BreadCrumb />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
