import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Product Intern</h4>
                <h5>ScalePods, Mumbai</h5>
              </div>
              <h3>JAN 2025 - PRESENT</h3>
            </div>
            <p>
              Developing hotel/resort kiosk applications and automation dashboards.
              Built agentic AI workflows on n8n and automated lead qualification
              using AI voice agents for enterprise clients.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>RCOEM, Nagpur</h5>
              </div>
              <h3>DEC 2025 - PRESENT</h3>
            </div>
            <p>
              Developing CareerCraft AI, a full-stack AI career platform.
              Built NLP-based resume analyzers and psychometric assessment
              engines with LLM integration for personalized roadmaps.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Web Dev Intern</h4>
                <h5>ECO Matrix Solutions</h5>
              </div>
              <h3>JUN 2025 - SEPT 2025</h3>
            </div>
            <p>
              Developed production-ready ERV sizing simulation tools. Integrated
              AI chatbots for customer engagement and revamped company website
              for improved accessibility and performance.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
