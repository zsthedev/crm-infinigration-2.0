import React from "react";
import "./auth.scss";
import logo from "../../../assets/logo.png";
const Login = () => {
  return (
    <section className="section" id="login">
      <form action="">
        <img src={logo} alt="" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="primary-btn">Login</button>
      </form>
    </section>
  );
};

export default Login;
