import { useRef } from "react";
import "./styles/TechStack.css";

// Mapping skill names to DevIcon names or fallback URLs
const getIconUrl = (skill: string) => {
  const mapping: Record<string, string> = {
    "Python": "python/python-original.svg",
    "JavaScript": "javascript/javascript-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    "C": "c/c-original.svg",
    "React.js": "react/react-original.svg",
    "Next.js": "nextjs/nextjs-original.svg",
    "HTML": "html5/html5-original.svg",
    "CSS": "css3/css3-original.svg",
    "WordPress": "wordpress/wordpress-plain.svg",
    "Flask": "flask/flask-original.svg",
    "MongoDB": "mongodb/mongodb-original.svg",
    "MySQL": "mysql/mysql-original.svg",
    "GitHub": "github/github-original.svg",
    "Postman": "postman/postman-original.svg",
    "GCP": "googlecloud/googlecloud-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    "TypeScript": "typescript/typescript-original.svg",
    "Supabase": "supabase/supabase-original.svg",
  };

  if (mapping[skill]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${mapping[skill]}`;
  }

  // Custom fallbacks
  if (skill === "ElevenLabs") return "https://logo.clearbit.com/elevenlabs.io";
  if (skill === "n8n") return "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png";
  if (skill === "Vapi") return "https://vapi.ai/favicon.ico";

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(skill)}&background=1a1f26&color=5eead4&bold=true&size=128`;
};

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JS", "C++", "C", "TS"]
  },
  {
    category: "Frameworks & Web",
    skills: ["React", "Next", "Flask", "Node", "Wordpress"]
  },
  {
    category: "AI/ML & Databases",
    skills: ["LLMs", "NLP", "RAG", "Mongo", "SQL", "Supabase"]
  },
  {
    category: "Auto & Tools",
    skills: ["n8n", "ElevenLabs", "Vapi", "GitHub", "Postman", "GCP"]
  }
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Removed all complex GSAP reveal logic to ensure immediate normal website behavior
  return (
    <section className="techstack-2d visible" id="techstack" ref={sectionRef}>
      <div className="tech-container">
        <div className="tech-header">
          <h3 className="tech-subtitle">Proficiencies</h3>
          <h2 className="tech-title">Technical <span>Stack</span></h2>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category" key={idx}>
              <div className="category-header">
                <span className="category-index">0{idx + 1}</span>
                <h4>{cat.category}</h4>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-item" key={sIdx}>
                    <div className="skill-logo-box">
                      <img
                        src={getIconUrl(skill)}
                        alt={skill}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill)}&background=1a1f26&color=5eead4&bold=true`;
                        }}
                      />
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
