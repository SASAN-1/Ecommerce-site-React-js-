import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { fetchProducts } from "@/redux/product";

const Shop = () => {
  const [searchData, setSearchData] = useState("");

  return (
    <>
      <div className="shop-navbar">
        <ul className="shop-nav">
          <li>
            <NavLink
              to={"bikes"}
              end
              className={({ isActive }) =>
                isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"
              }
            >
              Bikes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"parts"}
              className={({ isActive }) =>
                isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"
              }
            >
              Parts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"gears"}
              className={({ isActive }) =>
                isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"
              }
            >
              Gears
            </NavLink>
          </li>
        </ul>
        <div className="search-box">
          <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            placeholder="search bicycles..."
            className="search-input"
          />
          <IoSearch className="search-icon" />
        </div>
      </div>
      <Outlet context={{ searchData }} />
    </>
  );
};

export default Shop;
