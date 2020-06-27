import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";

export const ProfileNav = (props) => {
  const user = useSelector((state) => state.auth);

  return (
    <nav role="navigation" className="profile-nav">
      <div className="profile-nav-box">
        <Link className="profile-nav-link" to={`/profile/${props.id}`}>
          Profile
        </Link>
        <Link className="profile-nav-link" to={`/profile/${props.id}/uploads`}>
          Uploads
        </Link>
        {props.id === user.id ? (
          <Link
            className="profile-nav-link"
            to={`/profile/${user.id}/settings`}
          >
            Settings
          </Link>
        ) : (
          <React.Fragment />
        )}
      </div>
    </nav>
  );
};

export default ProfileNav;
