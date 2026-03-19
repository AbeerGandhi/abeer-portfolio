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
                    <div className="modal-header-text">
                        <h2>{category.title}</h2>
                        <span className="project-count">{category.projects.length} Projects</span>
                    </div>
                </div>
                <p className="modal-description">{category.description}</p>

                <div className="projects-list-container">
                    <h3>Explore {category.title}</h3>
                    <div className="projects-list">
                        {category.projects.map((project: any, index: number) => (
                            <div key={index} className="project-modal-card">
                                <div className="project-info">
                                    <h4>{project.name}</h4>
                                    <p className="project-url-text">{project.url.replace('https://', '')}</p>
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-action-btn"
                                    data-cursor="disable"
                                >
                                    View Project <MdOpenInNew />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
