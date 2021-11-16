import React from "react";
import "./Header.css";
import Logo from "../../Assets/image/HEALTHSTARS.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header-container">
      <div className="header-bg">
        <img alt="header-background" src={props.header} />
      </div>

      <div className="header-content">
        <div className="header-logo">
          <img alt="logo" src={Logo} />
        </div>
        <div className="header-link">
          <NavLink
            style={{ textDecoration: "none", color: "#fff" }}
            activeClassName="active"
            to="/home"
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#fff" }}
            activeClassName="active"
            to="/about"
          >
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#fff" }}
            activeClassName="active"
            to="/recipe"
          >
            <p>RECIPE</p>
          </NavLink>
        </div>
        <div className="header-text">
          <h1>
            {props.title} <span className="green-text">{props.titlegreen}</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
