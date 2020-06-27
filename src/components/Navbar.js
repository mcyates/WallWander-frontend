import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@reach/router";
import { startLogout } from "../actions/auth";

import logo from "../imgs/logo_150x150.png";

export const Navbar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(startLogout());
    props.navigate("/");
  };

  return (
    <nav className="nav" role="navigation">
      {user.id ? (
        <React.Fragment>
          <div>
            <Link tabIndex="1" to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>

          <div className="dropdown" tabIndex="2">
            <button className="button-dropdown">
              {user.name ? user.name : "Anonymous"}
            </button>
            <div className="dropdown-content">
              <Link tabIndex="3" className="dropdown-link" to="/upload">
                Upload
              </Link>
              <Link
                tabIndex="4"
                className="dropdown-link"
                to={`/profile/${user.id}`}
              >
                Profile
              </Link>
              <Link
                tabIndex="5"
                className="dropdown-link"
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
          <Link tabIndex="0" className="button" to="/login">
            Login
          </Link>
        </React.Fragment>
      )}
    </nav>
  );
};
export default Navbar;
