import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo-wrap" onClick={closeMenu}>
        <img src="/portrait.png" alt="Zedera logo" className="nav-logo" />
        <span className="logo-text">Zedera</span>
      </Link>

      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active-link" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={location.pathname === item.path ? "active-link" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}