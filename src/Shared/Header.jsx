import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
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
    <div className="bg-gray-200 px-4 py-5 mx-auto container">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex gap-1 items-center">
          <span className="ml-2 text-2xl font-bold tracking-widest  bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
            spiceRoute
          </span>
          <IoRestaurantSharp className="text-2xl text-amber-500" />
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
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
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
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
                className="w-10 h-10 tooltip tooltip-bottom tooltip-success"
                data-tip={user.displayName}
              >
                <img
                  className="rounded-full"
                  src={user.photoURL}
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
            <FaBars className="text-2xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0  w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex gap-1 items-center">
                      <span className="ml-2 text-2xl font-bold tracking-widest animate-text bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
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
                      <HiOutlineXMark className="text-2xl " />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
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
                    {user ? (
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
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
                          className="w-10 h-10 tooltip tooltip-bottom tooltip-success"
                          data-tip={user.displayName}
                        >
                          <img
                            className="rounded-full"
                            src={user.photoURL}
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
