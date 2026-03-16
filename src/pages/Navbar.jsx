import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Link to={"/"} className="logo">Bicycles.Np</Link>
        </div>
        <div className="search-container">
          <FaSearch className="search-icon"/>
          <input
            type="search"
            className="search-bar"
            placeholder="Search your ride..."
          />
        </div>
        <div>
          <ul className="nav-menu">
            <li>
              <Link to={"/"} className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/Shop"} className="nav-item">
                Shop
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} className="nav-item">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/Cart"} className="nav-item">
                Cart
              </Link>
            </li>
            <li>
              <Link to={"/Login"} className="sign-in-btn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;