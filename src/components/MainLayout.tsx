import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText";
import { setCharTimeline, setAllTimeline } from "./utils/GsapScroll";
import { initialFX } from "./utils/initialFX";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainLayout = ({ children }: PropsWithChildren) => {
    const [_isDesktopView, setIsDesktopView] = useState<boolean>(
        window.innerWidth > 1024
    );
    const location = useLocation();

    useEffect(() => {
        // Initial reveal
        initialFX();
    }, []);

    // Refresh animations on route change
    useEffect(() => {
        // Wait a bit longer for React to finish rendering the new page
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            setCharTimeline();
            setAllTimeline();
            setSplitText();
            initialFX();
            ScrollTrigger.refresh();
        }, 300);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        let timeoutId: number;
        const resizeHandler = () => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                setSplitText();
                setIsDesktopView(window.innerWidth > 1024);
                ScrollTrigger.refresh();
            }, 250);
        };

        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="layout-root">
            <Cursor />
            <Navbar />
            <SocialIcons />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-content-area">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
