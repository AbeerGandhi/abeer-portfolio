import { useState } from "react";
import "./styles/WorkCards.css";
import ProjectModal from "./ProjectModal";

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

const WorkCards = () => {
    const [selectedCategory, setSelectedCategory] = useState<any>(null);

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
