import Showtimes from "modules/Movie/components/Showtimes";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="p-4 bg-opacity-40 bg-white text-black ">
        <div className=" flex justify-between h-16 mx-auto">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="Cybershop.edu.vn"
            />
          </NavLink>
          <ul className="items-center hidden space-x-3 lg:flex p-0 m-0">
            {Showtimes ? (
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#cinema"
                  className="flex items-center px-4 -mb-1  no-underline text-black hover:border hover:font-bold"
                  
                >
                  Lịch Chiếu
                </a>
              </li>
            ) : (
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#footer"
                  className="flex items-center px-4 -mb-1 no-underline text-black hover:border hover:font-bold"
                 
                >
                  lịch Chiếu
                </a>
              </li>
            )}
            <li className="flex">
              <a
                to="#footer"
                rel="noopener noreferrer"
                href="#footer"
                className="flex items-center px-4 -mb-1 no-underline text-black hover:border hover:font-bold"
                
              >
                Liên Hệ
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded hover:border hover:font-bold">Đăng Ký</button>
            <button className="self-center px-8 py-3 font-semibold rounded hover:border hover:font-bold dark:bg-violet-400 dark:text-gray-900">
              Đăng Nhập
            </button>
          </div>
          <div>
            {" "}
            <div className="dropdown inline-block relative">
              <button
              
                className="p-4 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <ul className="dropdown-menu right-0 hidden text-gray-700 pt-1 absolute ">
              <button className="self-center px-8 py-3 rounded hover:border hover:font-bold">Đăng Ký</button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:border hover:font-bold">
              Đăng Nhập
            </button>
    </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


