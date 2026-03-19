import { useState, useEffect } from "react";
import "./styles/WorkCards.css";
import ProjectModal from "./ProjectModal";
import { lenis } from "./utils/initialFX";

// Categories and Projects data
const projectCategories = [
    {
        id: "frontend",
        title: "Frontend Development",
        description: "Modern, responsive, and performance-optimized web applications.",
        icon: "🎨",
        projects: [
            { name: "Skyran Real Estate", url: "https://skyran-real-estate.vercel.app" },
            { name: "Credence", url: "https://credence-sepia.vercel.app/" },
            { name: "Vedic Group of Institutions", url: "https://vedic-group-of-institutions.vercel.app" },
            { name: "Whitehouse Resort Tadoba", url: "https://whitehouse-resort-tadoba.netlify.app" }
        ]
    },
    {
        id: "ai",
        title: "AI Projects",
        description: "LLM-powered solutions and intelligent career counseling platforms.",
        icon: "🧠",
        projects: [
            { name: "CareerCraft AI", url: "https://careercraftai-kappa.vercel.app" },
            { name: "Dharma Guide", url: "https://dharmaguide.netlify.app" }
        ]
    },
    {
        id: "automation",
        title: "Automation Projects",
        description: "Workflow automation using n8n, Python, and custom AI agents.",
        icon: "⚙️",
        projects: [
            { name: "AutoDash", url: "https://autodash-qjfi.onrender.com" },
            { name: "WhatsApp Automation", url: "https://github.com/AbeerGandhi/whatsapp-automation" }
        ]
    },
    {
        id: "mldl",
        title: "ML/DL Projects",
        description: "Deep Learning models for summarization and medical recommendations.",
        icon: "📊",
        projects: [
            { name: "LexSum (Legal Summarizer)", url: "https://huggingface.co/spaces/abeergandhi/lexsum" },
            { name: "MediGuide", url: "https://huggingface.co/spaces/abeergandhi/mediguide" }
        ]
    }
];

const publications = [
    {
        type: "Patent",
        title: "Smart Shopping Cart",
        status: "Registered - April 2025",
        id: "447104-001",
        description: "Industrial design integrating hardware and embedded systems to enhance retail checkout efficiency."
    },
    {
        type: "Research Paper",
        title: "Deep Learning Medicine Recommendation System",
        status: "Presented | Under Review",
        date: "December 2025",
        description: "Intelligent system for medicine recommendations and alternative suggestions using Deep Learning."
    },
    {
        type: "Research Paper",
        title: "Intelligent Trip Optimization using ML",
        status: "Presented | Under Review",
        date: "April 2025",
        description: "Machine learning-based platform for optimizing travel routes and real-time travel recommendations."
    }
];

const WorkCards = () => {
    const [selectedCategory, setSelectedCategory] = useState<any>(null);

    // Stop Lenis scroll when modal is open to allow scrolling inside the modal
    useEffect(() => {
        if (selectedCategory) {
            lenis?.stop();
            document.body.style.overflow = 'hidden';
        } else {
            lenis?.start();
            document.body.style.overflow = 'auto';
        }

        return () => {
            lenis?.start();
            document.body.style.overflow = 'auto';
        };
    }, [selectedCategory]);

    return (
        <div className="work-cards-container">
            <h2 className="section-title">My <span>Work</span></h2>
            <div className="work-grid">
                {projectCategories.map((category) => (
                    <div
                        className="work-category-card"
                        key={category.id}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <div className="work-card-icon">{category.icon}</div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <span className="view-projects">View Projects →</span>
                    </div>
                ))}
            </div>

            {/* Patent & Research Section */}
            <div className="publications-section">
                <h2 className="section-title">Patent & <span>Research</span></h2>
                <div className="publications-grid">
                    {publications.map((pub, idx) => (
                        <div className="publication-card" key={idx}>
                            <div className="pub-tag">{pub.type}</div>
                            <h3>{pub.title}</h3>
                            <div className="pub-meta">
                                <span>{pub.status}</span>
                                {pub.id && <span className="pub-id">ID: {pub.id}</span>}
                                {pub.date && <span>{pub.date}</span>}
                            </div>
                            <p>{pub.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCategory && (
                <ProjectModal
                    category={selectedCategory}
                    onClose={() => setSelectedCategory(null)}
                />
            )}
        </div>
    );
};

export default WorkCards;
