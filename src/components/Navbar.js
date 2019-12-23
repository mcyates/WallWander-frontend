import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@reach/router";
import { startLogout } from "../actions/auth";

import logo from "../imgs/logo_150x150.png";

export const Navbar = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const logout = () => {
    dispatch(startLogout());
    props.navigate("/");
  };

  return (
    <nav
      className="flex my-8 items-center justify-between w-3/4 text-4xl"
      role="navigation"
    >
      {user.id ? (
        <React.Fragment>
          <div>
            <Link tabIndex="1" to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>

          <div className="dropdown relative mx-4" tabIndex="2">
            <button className="w-40 p-4 bg-gray-700 rounded shadow">
              {user.name ? user.name : "Anonymous"}
            </button>
            <div className="dropdown-content absolute flex flex-col text-center invisible w-40 bg-gray-500">
              <Link
                tabIndex="3"
                className="dropdown-link h-16 hover:bg-gray-700 hover:text-black"
                to="/upload"
              >
                Upload
              </Link>
              <Link
                tabIndex="4"
                className="dropdown-link h-16 hover:bg-gray-700 hover:text-black"
                to={`/profile/${user.id}`}
              >
                Profile
              </Link>
              <Link
                tabIndex="5"
                className="dropdown-link h-16 hover:bg-gray-700 hover:text-black"
                to="/"
                onClick={logout}
              >
                Logout
              </Link>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
            <Link className="navbar--logo" to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </React.Fragment>
      )}
    </nav>
  );
};
export default Navbar;
