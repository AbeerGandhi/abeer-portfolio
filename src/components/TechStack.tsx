import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/TechStack.css";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { name: "Python", icon: "/images/python.webp" },
  { name: "React.js", icon: "/images/react2.webp" },
  { name: "Next.js", icon: "/images/next2.webp" },
  { name: "Node.js", icon: "/images/node2.webp" },
  { name: "n8n", icon: "/images/n8n.webp" },
  { name: "MongoDB", icon: "/images/mongo.webp" },
  { name: "MySQL", icon: "/images/mysql.webp" },
  { name: "Flask", icon: "/images/flask.webp" },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback if GSAP is blocked or taking too long
    const parentContainer = sectionRef.current;
    if (parentContainer) {
      parentContainer.style.opacity = '1';
      parentContainer.style.visibility = 'visible';
    }

    const ctx = gsap.context(() => {
      // Small reveal animation for tech cards
      gsap.fromTo(".tech-card",
        { y: 40, opacity: 0, rotateX: -15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
            once: true
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="techstack-2d" id="techstack" ref={sectionRef}>
      <div className="tech-container">
        <h2 className="tech-title">My Techstack</h2>
        <div className="tech-grid">
          {techItems.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-card-inner">
                <div className="tech-icon-container">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-icon"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tech.name}&background=0D8ABC&color=fff`;
                    }}
                  />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
