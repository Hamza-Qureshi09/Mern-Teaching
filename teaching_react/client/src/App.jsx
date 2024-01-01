import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import { useHref } from "react-router-dom";
import FormHandling from "./pages/FormHandling/FormHandling";
import Weather from "./pages/Weather/Weather";

function App() {
  const href = useHref();
  const auth = {
    activation: true, //register
    login: true, //login =>false
  };
  return (
    <>
      <main className="bg-white  m-0 p-0">
        {/* pages */}
        <Routes>
          <Route path="/" element={<ProtectedRoutes auth={auth} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/weather" element={<Weather />} />
          <Route path="/home" element={<Home />} />
          <Route path="/formhandling" element={<FormHandling />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
