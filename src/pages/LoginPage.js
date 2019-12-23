import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@reach/router";

import { startLogin } from "../actions/auth";
import { UserForm } from "../components/Forms/UserForm";

import Navbar from "../components/Navbar";

const LoginPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(startLogin(user));
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="container">
        <UserForm
          button="Login"
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          submit={login}
        />
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
