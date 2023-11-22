import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog App</span>
                </a>
                <div className=" w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={'/dashboard'} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-gray-50 md:p-0"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-gray-50 md:p-0"}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/home'} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-gray-50 md:p-0"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} className={"block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} className={"block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
