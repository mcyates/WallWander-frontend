import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";

export const ProfileNav = props => {
  const user = useSelector(state => state.auth);

  return (
    <nav role="navigation" className="flex justify-center items-center mb-8">
      <div className="flex justify-around items-center w-60rem">
        <Link
          className="w-full max-w-xs h-full text-center py-4 px-8 bg-gray-700 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black rounded rounded-r-none shadow"
          to={`/profile/${props.id}`}
        >
          Profile
        </Link>
        <Link
          className="w-full max-w-xs h-full text-center py-4 px-8 bg-gray-700 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black shadow"
          to={`/profile/${props.id}/uploads`}
        >
          Uploads
        </Link>
        {props.id === user.id ? (
          <Link
            className="w-full max-w-xs h-full text-center py-4 px-8 bg-gray-700 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black rounded rounded-l-none shadow"
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
