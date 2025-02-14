import React from "react";
import "../styles/services.css";

const Services = () => {
  // Travel Routes Data
  const travelRoutes = {
    bus: [
      { from: "Bangalore", to: "Mumbai", duration: "15h", price: "₹1200" },
      { from: "Delhi", to: "Jaipur", duration: "5h", price: "₹700" },
      { from: "Chennai", to: "Hyderabad", duration: "10h", price: "₹900" },
    ],
    train: [
      { from: "Mumbai", to: "Delhi", duration: "18h", price: "₹1800" },
      { from: "Kolkata", to: "Bangalore", duration: "24h", price: "₹2200" },
      { from: "Pune", to: "Goa", duration: "8h", price: "₹1000" },
    ],
    flight: [
      { from: "Delhi", to: "Bangalore", duration: "2h 30m", price: "₹5000" },
      { from: "Mumbai", to: "Chennai", duration: "2h", price: "₹4500" },
      { from: "Hyderabad", to: "Kolkata", duration: "3h", price: "₹4000" },
    ],
  };

  return (
    <div className="services-container">
      {/* Hero Section with Background Image */}
      <div className="services-hero">
        <h1>Explore Our Travel Services</h1>
        <p>Find the best travel routes by Bus, Train, and Flight.</p>
      </div>

      {/* Service Sections with Routes */}
      <div className="services-grid">
        {/* Bus Services */}
        <div className="service-card">
          <img src="/images/KSRTC.avif" alt="Bus Service" />
          <h3>Bus Services</h3>
          <p>Comfortable and affordable bus rides.</p>
          <ul className="routes-list">
            {travelRoutes.bus.map((route, index) => (
              <li key={index}>
                {route.from} → {route.to} | {route.duration} | {route.price}
              </li>
            ))}
          </ul>
        </div>

        {/* Train Services */}
        <div className="service-card">
          <img src="/images/train.jpg" alt="Train Service" />
          <h3>Train Services</h3>
          <p>Fast and efficient train routes.</p>
          <ul className="routes-list">
            {travelRoutes.train.map((route, index) => (
              <li key={index}>
                {route.from} → {route.to} | {route.duration} | {route.price}
              </li>
            ))}
          </ul>
        </div>

        {/* Flight Services */}
        <div className="service-card">
          <img src="/images/flight.jpg" alt="Flight Service" />
          <h3>Flight Services</h3>
          <p>Quick and luxurious flight options.</p>
          <ul className="routes-list">
            {travelRoutes.flight.map((route, index) => (
              <li key={index}>
                {route.from} → {route.to} | {route.duration} | {route.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
