import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Journey",
    "Skills",
    "Education",
    "Passion",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          Rajesh<span>.</span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;