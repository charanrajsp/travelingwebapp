import React from "react";
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>TravelSite</strong>, your ultimate travel companion!  
        We are dedicated to making your journeys seamless, convenient, and affordable.  
        Whether you're planning a weekend getaway, a business trip, or an adventure around the world, we’ve got you covered.
      </p>

      <div className="about-content">
        <div className="about-section">
          <h3>🌍 Our Mission</h3>
          <p>
            Our mission is to simplify travel planning by providing a **one-stop solution** for booking buses, trains, flights, and tour packages.  
            We aim to offer **affordable**, **reliable**, and **hassle-free** travel services.
          </p>
        </div>

        <div className="about-section">
          <h3>🚀 Why Choose Us?</h3>
          <ul>
            <li>✅ **Easy Booking** – User-friendly interface for quick reservations.</li>
            <li>✅ **Best Prices** – Competitive fares with exciting discounts.</li>
            <li>✅ **24/7 Support** – Round-the-clock assistance for your travel needs.</li>
            <li>✅ **Multiple Transport Modes** – Bus, train, flight, and rental options.</li>
            <li>✅ **Real-Time Updates** – Live tracking, PNR status, and flight alerts.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>💡 Our Story</h3>
          <p>
            Founded in 2020, TravelSite was born out of a passion for travel and a vision to **redefine the way people explore** the world.  
            Over the years, we have helped thousands of travelers book their dream vacations with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
