import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="flex flex-row justify-between items-center bg-white h-screen">
      {/* left portion */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6  ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <h3 className="text-center">
              Not have an account?
              <Link
                to="/register"
                className="text-indigo-600 font-Montserrat font-semibold pl-1"
              >
                Sign up
              </Link>
            </h3>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm text-gray-500">
              Or continue with
            </p>
            <div className="flex flex-row justify-evenly items-center w-full mt-4">
              <button className="w-max px-6 py-2 rounded-md bg-gray-900 text-white font-Montserrat flex flex-row justify-center items-center gap-2">
                <FaGithub />
                GitHub
              </button>
              <button className="w-max px-6 py-2 rounded-md bg-gray-100 border border-gray-400 text-gray-700 font-Montserrat flex flex-row justify-center items-center gap-2">
                <FcGoogle />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* right portion */}
      <div className="w-1/2 bg-white h-full hidden md:flex md:flex-col">
        <img
          src="/images/signin_signup.jpg"
          alt="signin image"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
