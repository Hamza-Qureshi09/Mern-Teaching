import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";

// icons imports
import { IoMenu } from "react-icons/io5";

function App() {
  const [togglemenu, settogglemenu] = React.useState(false);
  const auth = {
    activation: true, //register
    login: false, //login =>false
  };

  // handling toggle effect
  const handleToggle = () => {
    settogglemenu(!togglemenu);
  };
  return (
    <>
      {/* navigation */}
      <header>
        <nav className="bg-gray-700 border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <a
              href="/home"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-Merriweather">
                HQ
              </span>
            </a>

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
                  <a
                    href="/home"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* pages */}

      <Routes>
        <Route path="/" element={<ProtectedRoutes auth={auth} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
