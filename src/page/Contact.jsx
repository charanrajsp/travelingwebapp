import React, { useState } from "react";
import "../styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions? We'd love to hear from you! Fill out the form below.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 123 Travel Street, Adventure City, World</p>
          <p>📞 Phone: +91 234 567 890</p>
          <p>✉️ Email: support@travelsite.com</p>
        </div>
      </div>
            <ToastContainer position="top-right" autoClose={2000} />
      
    </div>
  );
};

export default Contact;
