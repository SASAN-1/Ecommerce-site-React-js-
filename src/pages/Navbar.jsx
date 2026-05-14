import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.items);

  const totalItems = cartItem.reduce(
  (sum, item) => sum + (item.quantity || 1),
  0
);
  return (
    <>
      <div className="navbar">
          <div className="ham-menu-wrapper">
            <Link>
              <RxHamburgerMenu className="ham-menu" />
            </Link>
          </div>
        <div>
          <Link to={"/"} className="logo">
            Bicycles.Np
          </Link>
        </div>
          <ul className="nav-menu">
            <li>
              <Link to={"/"} className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <NavLink to={"/Shop"} className={({isActive}) => isActive ? "nav-item nav-active" : "nav-item"}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={"/About"} className={({isActive}) => isActive ? "nav-item nav-active" : "nav-item"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={({isActive}) => isActive ? "nav-item nav-active" : "nav-item"}>
                Contact
              </NavLink>
            </li>
          </ul>
        <div>
          <Link to={"/Cart"} className="cart-wrapper">
            <LiaShoppingBagSolid className="cart-icon"/>
              <span className="cart-len">{totalItems}</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
