import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { login } from "@/redux/auth";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: "",
      password: "",
    };

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    } else {
      dispatch(
        login({
          email: form.email,
        }),
      );
      navigate("/");
      toast.success("Logged in successfully.");
    }

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
          <h2>Welcome to Bicycle.Np! Please login.</h2>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className={`${errors.email ? "error-input" : ""}`}
          />

          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <span className="pass-span">
            <label>Password</label>
            <Link to={"/forgot-password"}>forgot password?</Link>
          </span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className={`${errors.password ? "error-input" : ""}`}
          />

          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>

        <div className="separator">
          <hr />
          <span>or Login with</span>
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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
