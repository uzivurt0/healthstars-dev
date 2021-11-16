import React, { Component } from "react";
import "./Footer.css";
import Logo from "../../Assets/image/HEALTHSTARS_GREEN.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <img alt="logo-green" src={Logo} />
        </div>
      </footer>
    );
  }
}
