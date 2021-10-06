import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";

const NavBar = () => {
  const [collapse, setCollapse] = useState(true);
  const navItems = [
    { label: "Safes", link: "/safes" },
    { label: "Vault AppRoles", link: "/vault" },
    { label: "Service Accounts", link: "/" },
    { label: "IAM Service Accounts", link: "/" },
    { label: "Azure Active Directory", link: "/" },
  ];

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
          <li className="nav__item" key={index}>
            <Link to={navItem.link}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
