import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import "./style/header.css";

function Header({ school,slug  }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="school-header">
      <div className="header-inner">
        <Link
          to={`/school/${slug}`}    className="header-brand"
        >
          <img src={school.logo} alt={school.name} />
          <span>{school.name}</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#admission"
            className="header-admission mobile-admission"
            onClick={() => setMenuOpen(false)}
          >
            Admissions <FiArrowUpRight />
          </a>
        </nav>

        <a href="#admission" className="header-admission desktop-admission">
          Admissions <FiArrowUpRight />
        </a>

        <button
          className="header-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
