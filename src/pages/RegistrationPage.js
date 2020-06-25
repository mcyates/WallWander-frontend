import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { startRegistration } from "../actions/auth";
import { UserForm } from "../components/Forms/UserForm";

import Navbar from "../components/Navbar";

const RegistrationPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(startRegistration(user));
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <UserForm
          button="Register"
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          submit={register}
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
