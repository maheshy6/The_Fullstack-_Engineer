import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Services from "./Services";
import AllDestinations from "./AllDestinations";
import LoginSignup from "./LoginSignup";
import Booking from "./Booking";
import Bookings from "./Bookings";

function Navbar() {
  return (
    <>
      <nav id="navCont">
        <div className="logo">
          <Link to="/">
            <img src="https://i.ibb.co/zHqB4bw/Designer-1-removebg-preview.png" alt="Traval Planner"/>
          </Link>
        </div>
        <div className="center">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/allDestinations">All Destinations</Link>
        </div>
        <div className="right">
          <Link to="/loginSignup">
            <button className="signup-button">SIGN UP</button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/allDestinations" element={<AllDestinations />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </>
  );
}

export default Navbar;
