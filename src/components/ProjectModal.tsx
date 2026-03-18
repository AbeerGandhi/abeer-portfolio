import "./styles/ProjectModal.css";
import { MdClose, MdOpenInNew } from "react-icons/md";

const ProjectModal = ({ category, onClose }: { category: any, onClose: () => void }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <MdClose />
                </button>
                <div className="modal-header">
                    <span className="modal-icon">{category.icon}</span>
                    <h2>{category.title}</h2>
                </div>
                <p className="modal-description">{category.description}</p>
                <div className="projects-list">
                    {category.projects.map((project: any, index: number) => (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="project-link-item"
                        >
                            <div className="project-link-info">
                                <h4>{project.name}</h4>
                                <span>{project.url}</span>
                            </div>
                            <MdOpenInNew />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
