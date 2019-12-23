import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NameModal from "../../components/Profile/NameModal";
import Navbar from "../../components/Navbar";
import ProfileNav from "./ProfileNav";
import { startSetName } from "../../actions/auth";
import { setNsfw } from "../../actions/search";

export const Settings = props => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth);

  const search = useSelector(state => state.search);

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (user.name === "") {
      show();
    }
  }, [user.name]);

  const changeName = e => {
    e.preventDefault();
    const userInfo = {
      id: user.id,
      email: user.email,
      token: user.token,
      name
    };
    hide();
    dispatch(startSetName(userInfo));
  };

  const handeNsfwChange = e => {
    e.preventDefault();
    dispatch(setNsfw(!search.nsfw));
  };
  return (
    <div className="settings flex flex-col items-center">
      <NameModal
        visible={visible}
        setName={setName}
        submit={changeName}
        hide={hide}
      />
      <Navbar />
      <ProfileNav uri={props.uri} id={props.id} />
      <div className="flex flex-col items-start justify-around p-8  bg-gray-800">
        <div className="flex justify-between items-center py-8">
          <p className="mr-8">
            <span>{user.name}</span>
          </p>
          <button
            type="button"
            onClick={show}
            className="p-8 text-center bg-purple-500 hover:bg-purple-900 text-black hover:text-white rounded shadow"
          >
            Change Username
          </button>
        </div>
        <div className="settings-adult flex justify-between items-center ">
          <p>allow nsfw</p>
          <button
            onClick={handeNsfwChange}
            type="button"
            className={`settings-adult-btn settings-${
              search.nsfw ? "nsfw" : "sfw"
            } mx-8`}
          >
            {search.nsfw ? "nsfw" : "sfw"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
