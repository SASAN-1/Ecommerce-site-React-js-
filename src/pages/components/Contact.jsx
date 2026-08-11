import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const infoItems = [
  {
    icon: FaMapMarkerAlt,
    title: "our location",
    subtitle: "Lokanthali, Bhaktapur",
  },
  {
    icon: FaEnvelope,
    title: "email address",
    subtitle: "info@sasan.com",
  },
  {
    icon: FaPhoneAlt,
    title: "phone number",
    subtitle: "+977 9748455152",
  },
  {
    icon: FaPhoneAlt,
    title: "phone number",
    subtitle: " 9748455152",
  },
];

const Contact = () => {
  // stores input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hanldles Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message is sent");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <ul className="info-list">
        <h1 className="contact-title">Get in touch</h1>
        {infoItems.map((item, index) => (
          <li key={index} className="info">
            <item.icon className="icon" />
            <div className="info-details">
              <h2>{item.title.toUpperCase()}</h2>
              <p>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>

      <fieldset className="contact-form">
        <legend>Send us a message</legend>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name..."
            className="form-input"
            required
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your Email..."
            className="form-input"
            required
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message here..."
            className="form-input"
          ></textarea>

          <div className="form-footer">
            <button type="submit">Send</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Contact;
