import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
        <RxCross2 className="cross-icon" onClick={() => navigate("/")} />

        <div className="form-header">
          <Link to={"/"} className="logo">
            Bicycles.Np
          </Link>
          <h2>Create your Account.</h2>
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

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm your password"
            value={form.confirmpassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign up</button>

        <div className="separator">
          <hr />
          <span>or sign up with</span>
          <hr />
        </div>

        <div className="direct-login">
          <button>
            <IoLogoFacebook />
            facebook
          </button>
          <button>
            <FaGoogle />
            Google
          </button>
        </div>

        <p className="register-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
