import { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/WhatIDoCards.css";

const services = [
    {
        title: "AI / ML Developer",
        description: "Specializing in building agentic AI systems, LLM-powered applications, and conversational voice agents. Experienced in designing RAG-based architectures, NLP resume analyzers, and complex automation workflows.",
        skills: ["Python", "LLMs", "n8n", "RAG", "NLP", "Voice Agents", "Prompting", "Flask", "MongoDB"],
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

    // Completely removed GSAP reveal logic to ensure 100% stable visibility on all browsers
    return (
        <div className="what-i-do-cards visible" ref={sectionRef}>
            <div className="what-i-do-intro">
                <h3 className="intro-subtitle">Services</h3>
                <h2 className="section-title">What I <span>Do</span></h2>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card visible" key={index}>
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
