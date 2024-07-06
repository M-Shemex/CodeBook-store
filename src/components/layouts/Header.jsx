import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "../other/Search";
import { useState, useEffect } from "react";
import { LoggedOutDropDown } from "../elements/LoggedOutDropDown";
import { LoggedInDropDown } from "../elements/LoggedInDropDown";
import { useCart } from "../../context";
export const Header = () => {
  const { cartList } = useCart();
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isLoggedIn = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    localStorage.setItem("dark", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button onClick={() => setDark(!dark)}>
              {dark ? (
                <i className="bi bi-moon-stars-fill text-white  text-2xl cursor-pointer"></i>
              ) : (
                <i className="bi bi-brightness-high  text-black  text-2xl cursor-pointer"></i>
              )}
            </button>
            <Link to="/cart">
              <span className="text-2xl cursor-pointer dark:text-white bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <button onClick={() => setShowSearch(!showSearch)}>
              <span className="text-2xl cursor-pointer dark:text-white bi bi-search"></span>
            </button>
            <div className="relative">
              <button onClick={() => setShowDropDown(!showDropDown)}>
                <i className="text-2xl  cursor-pointer dark:text-white bi bi-person-circle"></i>
              </button>
              {showDropDown &&
                (isLoggedIn ? (
                  <LoggedInDropDown setDropdown={setShowDropDown} />
                ) : (
                  <LoggedOutDropDown setDropdown={setShowDropDown} />
                ))}
            </div>
          </div>
        </div>
      </nav>
      {showSearch && <Search />}
    </header>
  );
};
