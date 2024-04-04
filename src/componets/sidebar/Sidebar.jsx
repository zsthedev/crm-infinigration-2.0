import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = ({ navLists, component: Component }) => {
  const dpath = useLocation().pathname;
  const isActive = (path) => {
    if (dpath === path) {
      return true;
    }
  };
  return (
    <section id="sidebar">
      <div className="row">
        <div className="nav">
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
          <div className="header">
            <p>
              Greeting! <span> Shahzaib</span>
            </p>
            <div className="icons">
              <img
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=sph"
                alt=""
              />
            </div>
          </div>
          <Component />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
