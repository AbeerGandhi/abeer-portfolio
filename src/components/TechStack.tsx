import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/TechStack.css";

gsap.registerPlugin(ScrollTrigger);

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
  if (skill === "n8n") return "https://logo.clearbit.com/n8n.io";
  if (skill === "Vapi") return "https://logo.clearbit.com/vapi.ai";

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(skill)}&background=1a1f26&color=5eead4&bold=true&size=128`;
};

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C++", "C", "TypeScript"]
  },
  {
    category: "Frameworks & Web",
    skills: ["React.js", "Next.js", "Flask", "Node.js", "HTML", "CSS", "WordPress"]
  },
  {
    category: "AI / ML & Databases",
    skills: ["LLMs", "NLP", "Deep Learning", "RAG", "MongoDB", "MySQL", "Supabase"]
  },
  {
    category: "Automation & Tools",
    skills: ["n8n", "ElevenLabs", "Vapi", "GitHub", "Postman", "GCP"]
  }
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure visibility on mount
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.visibility = 'visible';
    }

    const ctx = gsap.context(() => {
      // Force refresh ScrollTrigger to detect position accurately on load
      ScrollTrigger.refresh();

      gsap.fromTo(".skill-category",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="techstack-2d" id="techstack" ref={sectionRef}>
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
                      <img src={getIconUrl(skill)} alt={skill} loading="lazy" />
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
