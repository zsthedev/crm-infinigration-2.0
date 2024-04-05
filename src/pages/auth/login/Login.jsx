import React, { useState } from "react";
import "./auth.scss";
import logo from "../../../assets/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <section className="section" id="login">
      <form action="" onSubmit={submitHandler}>
        <img src={logo} alt="" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary-btn">Login</button>
      </form>
    </section>
  );
};

export default Login;
