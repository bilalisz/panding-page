import React from "react";
import fontAwesomeIcon from "../assets/javascript/icon";
import "../assets/css/navbarStyle/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav p-2">
      <h3 className="ml-5">
        <a href="#">INDEX.</a>
      </h3>

      <ul className="mr-5 pt-2">
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">FRAMES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
        <li>
          <a href="#">GIFTS</a>
        </li>
        <li>
          <a href="#">{fontAwesomeIcon("fa fa-user")} </a>
        </li>
        <li>
          <a href="#">{fontAwesomeIcon("fa fa-shopping-basket ")} </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
