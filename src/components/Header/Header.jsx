import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="header">
      <div className="header-container">
        <nav className="header-nav">
          <ol className={`header-nav-list ${menuOpen ? "open" : ""}`}>
            <li className="header-nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Work">Works</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ol>
          <button
            className="header-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="header-nav-toggle-icon"></span>
          </button>
        </nav>
      </div>
    </section>
  );
}

export default Header;
