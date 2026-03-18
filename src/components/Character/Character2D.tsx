import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Character2D.css";

const Character2D = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const characterRef = useRef<HTMLImageElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Breathing animation
        gsap.to(characterRef.current, {
            y: "-=5",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Monitor glow pulsing
        gsap.to(glowRef.current, {
            opacity: 0.4,
            scale: 1.05,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Mouse movement parallax
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 10;
            const yPos = (clientY / window.innerHeight - 0.5) * 10;

            gsap.to(characterRef.current, {
                x: xPos,
                y: yPos,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.to(glowRef.current, {
                x: xPos * 1.5,
                y: yPos * 1.5,
                duration: 1.2,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="character-2d-container" ref={containerRef}>
            <div className="character-2d-glow" ref={glowRef}></div>
            <img
                src="/developer_character_2d.png"
                alt="Developer Character"
                className="character-2d-image"
                ref={characterRef}
            />
            <div className="character-2d-vignette"></div>
        </div>
    );
};

export default Character2D;
