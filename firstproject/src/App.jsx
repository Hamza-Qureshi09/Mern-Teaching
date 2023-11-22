import React from 'react'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Login from './pages/Login/Login';
import Navbar from './components/shared/Navbar/Navbar';

const usersession = {
  isverified: false,//register
  accessToken: "",//login
  user: {
    name: "hamza",
    email: "asdf@gmail.com",
    id: "2353j4kl"
  }
}

const App = (props) => {
  return (
    <div>
      <header className=''>
        <Navbar />
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />

          <Route
            path='/'
            element={<ProtectedRoutes auth={usersession}>
            </ProtectedRoutes>} >
            <Route path='home' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App


