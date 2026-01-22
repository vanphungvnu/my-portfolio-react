import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // menu is closed when clicking outside or press escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // menu is closed when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-main fixed-top"
      ref={navRef}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Van Tri Phung
        </a>
        {/* hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="nav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
