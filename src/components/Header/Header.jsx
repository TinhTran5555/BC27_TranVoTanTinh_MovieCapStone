import Showtimes from "modules/Movie/components/Showtimes";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { logout } from "modules/Authentication/slices/authSlice";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToLogin = (login) => {
    navigate(`/${login}`);
  };
  const goToLogout = () => {
    dispatch(logout());

    navigate("/");
  };

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
            </li>  <li
                  onClick={() => goToLogin("admin")}
                  className="self-center px-8 py-3 font-semibold rounded hover:border hover:font-bold dark:bg-violet-400 dark:text-gray-900"
                >
                  Admin
                </li>
          </ul>
          {user ? (
            <div>
              {" "}
              <div className="dropdown inline-block relative">
                <button className="pr-4 p-2 font-bold text-xl hover:border">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />

                  {user.taiKhoan}
                </button>

                <ul className="dropdown-menu right-0 hidden text-gray-700 pt-1 absolute ">
                  <div
                    onClick={() => goToLogout()}
                    className="self-center px-8 py-3 rounded hover:border hover:font-bold"
                  >
                    Đăng xuất
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <Fragment>
              {" "}
              <div className="items-center flex-shrink-0 hidden lg:flex">
                <button
                  onClick={() => goToLogin("register")}
                  className="self-center px-8 py-3 rounded hover:border hover:font-bold"
                >
                  Đăng Ký
                </button>
                <button
                  onClick={() => goToLogin("login")}
                  className="self-center px-8 py-3 font-semibold rounded hover:border hover:font-bold dark:bg-violet-400 dark:text-gray-900"
                >
                  Đăng Nhập
                </button>
              
                
              </div>
              <div>
                {" "}
                <div className="dropdown inline-block relative">
                  <button className="p-4 lg:hidden">
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
                    <button
                      onClick={() => goToLogin("register")}
                      className="self-center px-8 py-3 rounded hover:border hover:font-bold"
                    >
                      Đăng Ký
                    </button>
                    <button
                      onClick={() => goToLogin("login")}
                      className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:border hover:font-bold"
                    >
                      Đăng Nhập
                    </button>
                  </ul>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
