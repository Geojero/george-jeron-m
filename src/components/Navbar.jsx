import { useState, useEffect, useRef } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "Profiles", "Contact"];

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const checkVisibility = () => {
      setScrolled(window.scrollY > 50);
      const heroEl = document.getElementById("home");
      if (heroEl) {
        setInHero(window.scrollY < heroEl.offsetHeight - 100);
      } else {
        setInHero(window.scrollY < window.innerHeight - 100);
      }
    };
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const shouldHide = !inHero && !mobileOpen;

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${shouldHide ? "hidden-nav" : ""}`}>
        <div className="navbar-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <img src="/logo_gj.png" alt="Logo" style={{ width: "40px", height: "auto" }} />
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ marginRight: "0.5rem" }}
            >
              Resume
            </a> */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  transform: mobileOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span
                style={{
                  transform: mobileOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
