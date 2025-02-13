import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          TravelSite
        </Link>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className={location.pathname === "/signin" ? "active" : ""}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className={location.pathname === "/signup" ? "active" : ""}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/signin" onClick={toggleMobileMenu}>
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
