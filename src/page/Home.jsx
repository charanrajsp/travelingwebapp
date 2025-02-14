import React, { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom"; 
import "../styles/Home.css";
import Hero from "../components/Hero.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transport, setTransport] = useState("bus");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
const [time, setTime] = useState("");
  const navigate = useNavigate();

  // Load username from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  // Handle ticket booking
  const handleSearch = () => {
    if (!from || !to) {
      toast.info("Please Fill All Required Fields.");
      return;
    }
    if (!username) {
      toast.info("Please sign in to book a ticket.");
      navigate("/signin");
      return;
    }

    const ticketDetails = { username, from, to, transport };
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));

    toast.success(`Ticket booked for ${username}: ${transport} from ${from} to ${to} time ${time} Date ${date}`);
    setFrom("");
     setTo("");
     setTime("");
      setDate("");
      setTransport("bus");
      
  };
  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser"); // Remove user from storage
    setUsername(""); // Clear username state
    navigate("/signin");
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero />
      <div className="hero">
        <h1>Explore the World with TravelSite</h1>
        <p>Find the best routes and travel options with ease.</p>
        {username ? (
          <>
          <h3>Welcome, {username}! 👋</h3>
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <p>
            Not signed in? <Link to="/signup">Create an account</Link>
          </p>
        )}
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
        <div className="input-group">
    <label>Travel Date:</label>
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  </div>

  <div className="input-group">
    <label>Travel Time:</label>
    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
  </div>

        <button className="search-btn" onClick={handleSearch}>Book Ticket</button>
      </div>

      <div className="travel-container">
        <div className="travel-card">
          <img src="/images/modernb.jpg" alt="Bus" className="travel-img" />
          <p className="animated-text">🚌 Enjoy a relaxing sleeper bus ride with comfortable seats and scenic views!</p>
        </div>

        <div className="travel-card">
          <img src="/images/trains.jpg" alt="Train" className="travel-img" />
          <p className="animated-text">🚆 Experience the magic of train journeys – smooth, scenic, and comfortable!</p>
        </div>

        <div className="travel-card">
          <img src="/images/airbus.jpg" alt="Flight" className="travel-img" />
          <p className="animated-text">✈️ Fly across the world with top airlines and seamless booking!</p>
        </div>

        <div className="travel-card">
          <img src="/images/ocean.jpg" alt="Tour" className="travel-img" />
          <p className="animated-text">🌍 Explore breathtaking destinations with our exclusive tour packages.</p>
        </div>

        <div className="travel-card">
          <img src="/images/flight.jpg" alt="Cruise" className="travel-img" />
          <p className="animated-text">🚢 Sail into adventure with luxurious cruise vacations and unforgettable experiences.</p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Home;
