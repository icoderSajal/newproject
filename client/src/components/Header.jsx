import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-700 text-white flex flex-row items-center justify-between p-6 text-2xl cursor-pointer">
      <div className="">
        <h3>Logo</h3>
      </div>
      <div className="flex">
        <ul className="flex gap-3 items-end">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/login">
            <button type="button" className="bg-slate-900 p-1 rounded-lg">
              Login
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
