import React, { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  RiLoginBoxLine,
  RiUserAddLine,
  RiUser3Line,
  RiUser3Fill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { logout } from "@/redux/auth";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const totalItems = cartItem.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.success("You've been logged out.");
  };

  return (
    <>
      <div className="navbar">
        <div className="ham-menu-wrapper">
          <Link onClick={handleShowMenu}>
            <RxHamburgerMenu className="ham-menu" />
          </Link>
        </div>
        <div>
          <Link to={"/"} className="logo">
            Bicycles.Np
          </Link>
        </div>
        <ul className={showMenu ? "nav-menu-res" : "nav-menu "}>
          <li>
            <Link to={"/"} className="nav-item" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <NavLink
              to={"/Shop"}
              className={({ isActive }) =>
                isActive ? "nav-item nav-active" : "nav-item"
              }
              onClick={closeMenu}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                isActive ? "nav-item nav-active" : "nav-item"
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                isActive ? "nav-item nav-active" : "nav-item"
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="login-cart-section">
          <li>
            <Popover>
              <PopoverTrigger asChild>
                {isLoggedIn ? (
                  <RiUser3Fill className="log-icon" />
                ) : (
                  <RiUser3Line className="log-icon" />
                )}
              </PopoverTrigger>

              <PopoverContent className="auth-popover">
                <div className="auth-popover-menu">
                  {isLoggedIn ? (
                    <>
                      <Link to="/profile">
                        <span className="log-reg-op">Profile</span>
                      </Link>
                      <span className="btn" onClick={handleLogout}>
                        Logout
                      </span>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <span className="log-reg-op">
                          <RiLoginBoxLine />
                          Login
                        </span>
                      </Link>
                      <Link to="/register">
                        <span className="log-reg-op">
                          <RiUserAddLine />
                          Register
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <Link to={"/Cart"} className="cart-wrapper">
              <LiaShoppingBagSolid className="cart-icon" />
              <span className="cart-len">{totalItems}</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
