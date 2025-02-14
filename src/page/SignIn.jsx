import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", user.name); // Store the user's name
    toast.success("Sign In Successful! Redirecting...");
      navigate("/"); // Redirect to Home
    } else {
      toast.error("Invalid Email or Password!");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </div>

      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      </div>

      <button className="signin-btn" onClick={handleSignIn}>Sign In</button>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default SignIn;
