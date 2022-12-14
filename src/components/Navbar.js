import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully logged out!", {
          autoClose: 5000,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <nav className="bg-base-200 border-b-2 shadow">
      <div className="container">
        <div className="navbar justify-between">
          <div>
            <NavLink className="font-bold text-primary text-2xl" to="/home">
              Dental care
            </NavLink>
          </div>
          <div>
            <ul className="hidden md:flex gap-14 md:gap-8">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "font-semibold"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : "font-semibold"
                      }
                      to="/my-reviews"
                    >
                      My reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : "font-semibold"
                      }
                      to="/add-service"
                    >
                      Add service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleSignout} className="font-semibold">
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex-none">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="md:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-primary font-bold" : "font-semibold"
                        }
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    {user && (
                      <>
                        <li>
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary font-bold"
                                : "font-semibold"
                            }
                            to="/my-reviews"
                          >
                            My reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary font-bold"
                                : "font-semibold"
                            }
                            to="/add-service"
                          >
                            Add service
                          </NavLink>
                        </li>
                      </>
                    )}
                    <li>
                      <button onClick={handleSignout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <ul className="flex gap-5">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold" : "font-semibold"
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold" : "font-semibold"
                    }
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
