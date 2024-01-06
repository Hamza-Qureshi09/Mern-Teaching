import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IAddToCartState,
  toggleAddToCartSidebarAction,
} from "../../store/services/AddToCart";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch();
  const { toggleAddToCartSidebar } = useSelector(
    (state: IAddToCartState) => state.addtocartSlice
  );

  const handleAddToCartSidebar = () => {
    dispatch(
      toggleAddToCartSidebarAction({
        newStatus: !toggleAddToCartSidebar,
      })
    );
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 h-[70px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={handleAddToCartSidebar}>
                <span
                  className="block py-2 px-3 text-white bg-blue-700 rounded bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 cursor-pointer"
                  aria-current="page"
                >
                  Cart
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
