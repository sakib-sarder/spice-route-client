import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoRestaurantSharp } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-amber-200 px-4 py-5 mx-auto container shadow-lg ">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex gap-1 items-center">
          <IoRestaurantSharp className="text-2xl text-amber-500" />
          <span className=" text-3xl font-bold tracking-wider  bg-gradient-to-r from-[#8B1874] to-[#E11299] bg-clip-text text-transparent">
            spiceRoute
          </span>
          <IoRestaurantSharp className="text-2xl text-amber-500" />
        </Link>

        <ul className="items-center hidden space-x-4 text-lg font-semibold lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-4 lg:flex">
          {user ? (
            <li>
              <button className="border px-2 py-1 font-semibold hover:bg-amber-500 border-gray-600 shadow-lg rounded-md" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="text-lg font-semibold">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <div
                className="tooltip tooltip-bottom tooltip-warning"
                data-tip={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="User Image"
                />
              </div>
            </li>
          )}
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineBars3BottomRight className="text-4xl hover:text-amber-800"/>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-amber-200  rounded-lg shadow-lg">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex gap-1 items-center">
                      <IoRestaurantSharp className="text-2xl text-amber-500" />
                      <span className="text-3xl font-bold tracking-wider bg-gradient-to-r from-[#8B1874] to-[#E11299] bg-clip-text text-transparent">
                        spiceRoute
                      </span>
                      <IoRestaurantSharp className="text-2xl text-amber-500" />
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiOutlineXMark className="text-4xl hover:text-amber-800" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-2 text-lg  font-semibold">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <hr className="border-black"/>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <hr className="border-black"/>
                    {user ? (
                      <>
                      <li>
                        <button className="border px-2 py-1 font-semibold border-gray-300 hover:bg-amber-500 shadow-lg rounded-md" onClick={handleLogout}>Logout</button>
                        </li>
                        <hr className="border-black"/>
                      </>
                    ) : (
                      <li>
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                    {user && (
                      <li>
                        <div
                          className="tooltip tooltip-bottom tooltip-warning"
                          data-tip={user.displayName}
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src={user?.photoURL}
                            alt="User Image"
                          />
                        </div>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
