import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { lenis } from "./utils/initialFX";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const resizeHandler = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Sync on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="header">
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
        <ul>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              <HoverLinks text="ABOUT" />
            </Link>
          </li>
          <li>
            <Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>
              <HoverLinks text="EXPERIENCE" />
            </Link>
          </li>
          <li>
            <Link to="/work" className={location.pathname === "/work" ? "active" : ""}>
              <HoverLinks text="WORK" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              <HoverLinks text="CONTACT" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
