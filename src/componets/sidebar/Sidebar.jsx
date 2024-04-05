import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
import logo from "../../assets/logo.png";
const Sidebar = ({ navLists, component: Component, pageTitle = "" }) => {
  const dpath = useLocation().pathname;

  const [visible, setVisible] = useState(false);
  console.log();
  const isActive = (path) => {
    if (dpath === path || dpath.split("/")[2] === path.split("/")[2]) {
      return true;
    }
  };
  return (
    <section id="sidebar">
      <div className="row">
        <div className="nav">
          <img src={logo} className="logo" alt="" />
          {navLists && navLists.length > 0
            ? navLists.map((l) => (
                <Link
                  to={l.value}
                  className={isActive(l.value) ? "active" : ""}
                >
                  {l.label}
                </Link>
              ))
            : ""}
        </div>
        <div className="component-area">
          <div className="content">
            <div className="header">
              {pageTitle === "" ? (
                <p>
                  Greeting! <span> Shahzaib</span>
                </p>
              ) : (
                <p className="heading">{pageTitle}</p>
              )}
              <div className="icons">
                <img
                  src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=sph"
                  alt=""
                  onClick={() => setVisible(!visible)}
                />
                <div className={visible ? "dropdown" : "hide"}>
                  <ul>
                    <Link>Update Profile</Link>
                    <button>Logout</button>
                  </ul>
                </div>
              </div>
            </div>
            <Component />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
