import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router";

const Forgot = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <Link to={"/"} className="logo">
            Bicycles.Np
          </Link>
          <h2>Enter your email to reset your password.</h2>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          <MdOutlineMailOutline />
          Send email
        </button>

        <p className="register-text">
          Go back to <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Forgot;
