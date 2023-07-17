import React from "react";
import "../assets/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">onesteply</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">LeaderBord</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
