import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Services from "./Services";
import AllDestinations from "./AllDestinations";
import LoginSignup from "./LoginSignup"; 
import Booking from "./Booking";
import Bookings from "./Bookings";

function Navbar() {
  return (
    <>
      {/* <nav id="navCont">
                <div className="left">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Products</a>
                    <a href="#">All Destinations</a>
                </div>
                <div className="right">
                    <input placeholder="search" type="text" />
                    <button>Sign Up</button>
                    <button>LogIn</button>
                </div>
            </nav> */}

            <nav id="navCont">
                <div className="left">
                    <Link to="/" >Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/bookings" >Bookings</Link>
                    <Link to="/allDestinations">Destinations</Link>
                    <Link to="/loginSignup">Register</Link>
                </div>

                <div className="right">
                    <input placeholder="search" type="text" />
                    
                </div>
            </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
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
