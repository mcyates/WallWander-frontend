import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BaseModal from "../../components/BaseModal";
import Navbar from "../../components/Navbar";
import ProfileNav from "./ProfileNav";
import { startSetName } from "../../actions/auth";
import { setNsfw } from "../../actions/search";

export const Settings = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const search = useSelector((state) => state.search);

  const [name, setName] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  let dummy = modalIsOpen;

  const show = () => {
    setIsOpen(true);
  };

  const hide = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (user.name === "") {
      show();
    }
  }, [user.name]);

  const changeName = (e) => {
    e.preventDefault();
    const userInfo = {
      id: user.id,
      email: user.email,
      token: user.token,
      name,
    };
    hide();
    dispatch(startSetName(userInfo));
  };

  const handleNsfwChange = (e) => {
    e.preventDefault();
    dispatch(setNsfw(!search.nsfw));
  };

  return (
    <div className="settings">
      <Navbar />
      <ProfileNav uri={props.uri} id={props.id} />
      <div className="settings-container">
        <div className="settings-box">
          <p>
            <span>{user.name}</span>
          </p>

          <BaseModal
            buttonStyle="settings-button"
            buttonText="change username"
            canCancel={false}
            contentLabel="change username modal"
          >
            <form className="modal-form" onSubmit={changeName} method="post">
              <label className="form-label" htmlFor="name">
                Username
              </label>
              <input
                type="text"
                placeholder="min 6 characters"
                className="form-input"
                id="name"
                onChange={(e) => setName(e.target.value)}
                minLength="4"
              />
              <button className="button-modal" type="submit">
                Submit
              </button>
            </form>
          </BaseModal>
        </div>
        <div className="settings-adult">
          <p>Show Sensitive Content</p>
          <button
            onClick={handleNsfwChange}
            type="button"
            className={`settings-adult-btn settings-${
              search.nsfw ? "Sensitive" : "General"
            } mx-8`}
          >
            {search.nsfw ? "true" : "false"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
