import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting after sign-up
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
    toast.info("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Sign-up successful! 🎉");

    toast.success("Sign-up successful!🎉 Please sign in.");
    navigate("/signin"); // Redirect to Sign In page
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
      {message && <p className="message">{message}</p>}


      <ToastContainer position="top-right" autoClose={2000} />

    </div>
  );
};

export default SignUp;
