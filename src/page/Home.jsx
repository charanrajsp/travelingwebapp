import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import Hero from "../components/Hero.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transport, setTransport] = useState("bus");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Load username from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    } else {
      navigate("/signin"); // Redirect to Sign In if not logged in
    }
  }, [navigate]);

  // Handle ticket booking
  const handleSearch = () => {
    if (!from || !to) {
      toast.info("Please select both 'From' and 'To' locations.");
      return;
    }
    if (!username) {
      toast.info("Please sign in to book a ticket.");
      return;
    }

    const ticketDetails = { username, from, to, transport };
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));

    toast.success(`Ticket booked for ${username}: ${transport} from ${from} to ${to}`);
  };

  // Handle Sign Out
  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser"); // Remove logged-in user
    navigate("/signin"); // Redirect to Sign In page
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero/>
      <div className="hero">
        <h1>Explore the World with TravelSite</h1>
        <p>Find the best routes and travel options with ease.</p>
        {username && <h3>Welcome, {username}! 👋</h3>}
        <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
      </div>

      {/* Travel Search Form */}
      <div className="search-form">
        <div className="input-group">
          <label>From:</label>
          <input type="text" placeholder="Enter departure city" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>

        <div className="input-group">
          <label>To:</label>
          <input type="text" placeholder="Enter destination city" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Transport Mode:</label>
          <select value={transport} onChange={(e) => setTransport(e.target.value)}>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="flight">Flight</option>
          </select>
        </div>

        <button className="search-btn" onClick={handleSearch}>Book Ticket</button>
      </div>
      
    
     
     
      <ToastContainer position="top-right" autoClose={2000} />
      
    </div>
  );
};

export default Home;
