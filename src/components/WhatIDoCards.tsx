import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./styles/WhatIDoCards.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "AI / ML Developer",
        description: "Specializing in building agentic AI systems, LLM-powered applications, and conversational voice agents. Experienced in designing RAG-based architectures, NLP resume analyzers, and complex automation workflows.",
        skills: ["Python", "LLMs", "n8n", "RAG", "NLP", "Voice Agents (Vapi/ElevenLabs)", "Prompt Engineering", "Flask", "MongoDB"],
        icon: "🤖",
        link: "/work"
    },
    {
        title: "Frontend Developer",
        description: "Creating high-performance, pixel-perfect web applications with modern technologies. Expertise in building kiosk-based resort apps, real-time automation dashboards, and production-ready simulation tools.",
        skills: ["React.js", "Next.js", "TypeScript", "GSAP", "HTML5", "CSS3", "WordPress", "REST APIs"],
        icon: "💻",
        link: "/work"
    }
];

const WhatIDoCards = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fallback for visibility
        if (sectionRef.current) {
            sectionRef.current.style.opacity = '1';
            sectionRef.current.style.visibility = 'visible';

            // Ensure cards are visible immediately if GSAP fails
            const cards = sectionRef.current.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
            cards.forEach(card => card.style.opacity = '1');
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(".service-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="what-i-do-cards" ref={sectionRef}>
            <div className="what-i-do-intro">
                <h3 className="intro-subtitle">Services</h3>
                <h2 className="section-title">What I <span>Do</span></h2>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="service-tags">
                            {service.skills.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <Link to={service.link} className="see-projects-btn" data-cursor="disable">
                            See Projects <span>→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatIDoCards;
