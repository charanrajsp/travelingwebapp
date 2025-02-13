import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="fade-in">Explore the World with <span>TravelSite</span></h1>
        <p className="slide-up">Find the best routes and travel options with ease.</p>
        <p className="slide-up">Ticket A book Below</p>

      </div>
      <div className="hero-images">
        <div className="image-slider">
          <img src="/images/flight.jpg" alt="Travel Image 1" />
          <img src="/images/bus2.jpg" alt="Travel Image 2" />
          <img src="/images/train.jpg" alt="Travel Image 3" />
          <img src="/images/KSRTC.avif" alt="Travel Image 3" />
          <img src="/images/bus1.avif" alt="Travel Image 3" />
          <img src="/images/bus1.avif" alt="Travel Image 3" />



        </div>
      </div>
    </div>
  );
};

export default Hero;
