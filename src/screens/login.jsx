import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Login() {
  return (
    <>
      <Header hideButtons />
      <div className="w-full max-w-sm p-6 m-auto my-20 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Влезте в профила си
        </h2>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Вход
            </button>
          </div>
          <p className="text-center text-sm mt-2 text-gray-600">
            Нямате профил?{" "}
            <a
              href="/register"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Регистрирайте се
            </a>
          </p>
        </form>
      </div>
      <Footer sticky />
    </>
  );
}

export default Login;
