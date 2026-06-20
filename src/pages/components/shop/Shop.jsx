import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Shop = () => {
  return (
    <>
      <ul className="shop-nav">
        <li>
          <NavLink to={"bikes"} end className={({isActive}) => isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"}>
            Bikes
          </NavLink>
        </li>
        <li>
          <NavLink to={"parts"} className={({isActive}) => isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"}>
            Parts
          </NavLink>
        </li>
        <li>
          <NavLink to={"gears"} className={({isActive}) => isActive ? "shop-nav-item shop-nav-active" : "shop-nav-item"}>
            Gears
          </NavLink>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}

export default Shop