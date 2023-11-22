// icons imports
import React from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [togglemenu, settogglemenu] = React.useState(false);
  // handling toggle effect
  const handleToggle = () => {
    settogglemenu(!togglemenu);
  };
  return (
    <header>
      <nav className="bg-gray-50 border-gray-200 h-[70px]">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <NavLink
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-[40px] object-cover"
            />
          </NavLink>

          {/*menu is here */}
          <IoMenu
            onClick={handleToggle}
            className="text-white text-2xl cursor-pointer md:hidden"
          />

          <div
            className={`${
              togglemenu ? "hidden" : ""
            } w-full md:w-max md:block md:w-auto" id="navbar-default`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              <li>
                <NavLink
                  to="/home"
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-gray-900 md:hover:text-blue-700 md:p-0 font-Nunito"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-Nunito"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-Nunito"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-Nunito"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-Nunito"
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-Nunito"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
