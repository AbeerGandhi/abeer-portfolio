import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Re-initialize smoother on mount
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      speed: 1.2,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    if (smoother) {
      smoother.scrollTop(0);
      smoother.paused(false);
    }

    const resizeHandler = () => {
      if (smoother) smoother.refresh(true);
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Sync on route change
  useEffect(() => {
    if (smoother) {
      smoother.scrollTop(0);
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
