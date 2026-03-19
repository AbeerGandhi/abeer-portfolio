import Landing from "../components/Landing";

const HomePage = () => {
    return (
        <div className="home-page-root">
            <Landing />

            <div className="home-summary-container container1">
                <div className="home-summary-content">
                    <h3 className="summary-subtitle">About Me</h3>
                    <div className="about-content-wrapper">
                        <p className="summary-text para">
                            Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning,
                            with hands-on experience building agentic AI workflows, voice agents, and LLM-integrated
                            full-stack applications. Proven ability to design and deploy intelligent web apps using
                            the MERN stack, Python, and automation platforms like n8n.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .home-page-root {
                    position: relative;
                }
                .home-summary-container {
                    padding: 120px 0;
                    display: flex;
                    justify-content: flex-start;
                    position: relative;
                    z-index: 10;
                    margin-top: -5vh;
                }
                .home-summary-content {
                    width: 100%;
                    max-width: 900px;
                }
                .summary-subtitle {
                    color: var(--accentColor);
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    font-size: 1rem;
                    margin-bottom: 25px;
                    font-weight: 500;
                }
                .about-content-wrapper {
                    position: relative;
                    padding-left: 40px;
                    border-left: 2px solid rgba(94, 234, 212, 0.3);
                }
                .summary-text {
                    font-size: clamp(1.4rem, 2.5vw, 2.8rem);
                    line-height: 1.25;
                    font-weight: 600;
                    color: #fff;
                    letter-spacing: -0.5px;
                }
                @media (max-width: 1024px) {
                    .home-summary-container {
                        margin-top: 0;
                        padding: 80px 0;
                    }
                    .about-content-wrapper {
                        padding-left: 20px;
                    }
                }
                @media (max-width: 768px) {
                    .summary-text {
                        font-size: 1.5rem;
                        line-height: 1.4;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;
