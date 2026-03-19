import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Character2D from "./Character/Character2D";
import setSplitText from "./utils/splitText";
import { setCharTimeline, setAllTimeline } from "./utils/GsapScroll";
import { initialFX, lenis } from "./utils/initialFX";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainLayout = ({ children }: PropsWithChildren) => {
    const [_isDesktopView, setIsDesktopView] = useState<boolean>(
        window.innerWidth > 1024
    );
    const location = useLocation();

    useEffect(() => {
        // Initial reveal and Lenis setup
        initialFX();
    }, []);

    // Refresh animations on route change
    useEffect(() => {
        // Force scroll to top immediately on route change
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }

        // Wait a bit longer for React to finish rendering the new page
        const timer = setTimeout(() => {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
                // @ts-ignore
                ScrollTrigger.refresh();
            } else {
                window.scrollTo(0, 0);
            }

            setCharTimeline();
            setAllTimeline();
            setSplitText();
            initialFX();
            ScrollTrigger.refresh();
        }, 150);

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
            <Navbar />
            <SocialIcons />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* 
                       Placing character INSIDE the smooth-content ensures 
                       multi-page persistent background while also scrolling naturally.
                       We place it BEFORE main content area but use its CSS for layering.
                    */}
                    <div className={`character-wrapper ${location.pathname === "/" ? "home-state" : "bg-state"}`} style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100vh',
                        pointerEvents: 'none',
                        zIndex: 5 /* Between background (0) and text (10) */
                    }}>
                        <Character2D />
                    </div>

                    <main className="main-content-area" style={{ position: 'relative', zIndex: 10 }}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
