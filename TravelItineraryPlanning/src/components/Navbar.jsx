import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Traval Planner <span className="logo-icon"></span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">All Destinations</a></li>
      </ul>
      <button className="signup-btn">SIGN UP</button>
    </nav>
  );
};
export default Navbar
