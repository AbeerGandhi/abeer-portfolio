import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { lenis } from "./utils/initialFX";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      ScrollTrigger.refresh();
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Sync on route change and close menu
  useEffect(() => {
    setIsMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="navbar-title" data-cursor="disable">
          AG
        </Link>

        <a
          href="mailto:abeergandhi2@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          abeergandhi2@gmail.com
        </a>

        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
              <HoverLinks text="HOME" />
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
              <HoverLinks text="ABOUT" />
            </Link>
          </li>
          <li>
            <Link to="/experience" className={location.pathname === "/experience" ? "active-link" : ""}>
              <HoverLinks text="EXPERIENCE" />
            </Link>
          </li>
          <li>
            <Link to="/work" className={location.pathname === "/work" ? "active-link" : ""}>
              <HoverLinks text="WORK" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>
              <HoverLinks text="CONTACT" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
