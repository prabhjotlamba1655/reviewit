import React from "react";
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Header.css";
import logo from './logo.png'
function Header() {
    return (
    <nav className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo of amazon" />
        </Link>
      </div>

      <div className="header__middle">
        <Link className="header__middle__options" to="/">
          <h5>Home</h5>
        </Link>

        <Link className="header__middle__options" to="/product">
          <h5>product</h5>
        </Link>

        <Link className="header__middle__options" to="/review">
          <h5>Feedback</h5>
        </Link>

        <Link className="header__middle__options" to="/DeveloperLogin">
          <h5>Developer Login</h5>
        </Link>

      </div>

      <div className="header__right">
        <Link to="/admin" className="header__right__link">
          <div className="header__right__inside">
            <VerifiedUserIcon className="icons" />
            <h5 className="header__optionLine2">Admin</h5>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;