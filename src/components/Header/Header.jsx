import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <nav className="header-nav">
          <ol className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/"></Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Work">works</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Blog">blog</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Contact">contact</Link>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Header;
