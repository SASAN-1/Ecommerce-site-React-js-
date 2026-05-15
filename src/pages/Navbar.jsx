import React, { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.items);

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
        <div>
          <Link to={"/Cart"} className="cart-wrapper">
            <LiaShoppingBagSolid className="cart-icon" />
            <span className="cart-len">{totalItems}</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
