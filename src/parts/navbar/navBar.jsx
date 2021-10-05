import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";

const NavBar = () => {
  return (
    <header className="nav">
      <Link className="nav__logo" to="/">
        <img src={logo} alt="t-vault" />
      </Link>
      <ul className="list list-nav">
        <li className="list__item-nav">
          <Link className="nav__item" to="/safes">
            Safes
          </Link>
        </li>
        <li className="list__item-nav">
          <Link className="nav__item" to="/vault">
            Vault AppRoles
          </Link>
        </li>
        <li className="list__item-nav">
          <Link className="nav__item" to="/">
            Service Accounts
          </Link>
        </li>
        <li className="list__item-nav">
          <Link className="nav__item" to="/">
            IAM Service Accounts
          </Link>
        </li>
        <li className="list__item-nav">
          <Link className="nav__item" to="/">
            Azure Active Directory
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
