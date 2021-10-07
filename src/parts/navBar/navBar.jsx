import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./navBar.css";

const NavBar = () => {
  const [collapse, setCollapse] = useState(true);
  const navItems = [
    { label: "Safes", link: "/safes" },
    { label: "Vault AppRoles", link: "/vault?data=hello" },
    { label: "Service Accounts", link: "/service" },
    { label: "IAM Service Accounts", link: "/iam" },
    { label: "Azure Active Directory", link: "/azure" },
  ];

  const location = useLocation();

  const handleCollapse = () => {
    setCollapse((c) => !c);
  };

  return (
    <header className="nav">
      <Link className="nav__logo" to="/">
        <img src={logo} alt="t-vault" />
      </Link>
      <i
        className="fa fa-bars fa-2x nav__toggle"
        aria-hidden="true"
        onClick={() => handleCollapse()}
      ></i>
      <ul
        className={`list nav__list${collapse ? " nav__list--collapsed" : ""}`}
      >
        {navItems.map((navItem, index) => (
          <li
            className={`nav__item${
              new RegExp(`^${location.pathname}`).test(navItem.link)
                ? " nav__item--selected"
                : ""
            }`}
            key={index}
          >
            <Link to={navItem.link}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav__end">
        <span className="nav__end__item">
          <i
            className="fa fa-file-text-o nav__end__icon"
            aria-hidden="true"
          ></i>
          Documentation
        </span>
        <span className="nav__end__item">
          <i className="fa fa-user-o nav__end__icon" aria-hidden="true"></i>
          (Admin) Davis R.
        </span>
      </div>
    </header>
  );
};

export default NavBar;
