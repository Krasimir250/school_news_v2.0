import React from "react";
import { Link } from "react-router-dom";

function Header({ hideButtons }) {
  return (
    <header className="bg-blue-600 p-4 shadow-md ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex">
          <p>School News</p>
        </div>
        <nav className={hideButtons ? "hidden" : "space-x-4"}>
          <Link to={"/"} className="text-white hover:text-gray-200">
            Начало
          </Link>
          <Link to={"/gallery"} className="text-white hover:text-gray-200">
            Галерия
          </Link>
          <Link to={"/writeNews"} className="text-white hover:text-gray-200">
            Напиши
          </Link>
          <Link to={"/profile"} className="text-white hover:text-gray-200">
            Профил
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
