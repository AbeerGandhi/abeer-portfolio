import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setCharTimeline() {
  if (!document.querySelector(".landing-section")) return;

  // Kill existing ScrollTriggers to prevent duplicates
  ScrollTrigger.getAll().forEach(st => {
    if (st.trigger && typeof st.trigger === 'string') {
      if (st.trigger.includes("landing")) {
        st.kill();
      }
    }
  });

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  if (window.innerWidth > 1024) {
    tl1
      .to(".character-2d-container", { opacity: 0, ease: "none" }, 0)
      .to(".landing-container", { opacity: 0, y: -100, ease: "none" }, 0);
  }
}

export function setAllTimeline() {
  // Clear old triggers
  ScrollTrigger.getAll().forEach(st => {
    if (!st.trigger) return;
    const t = st.trigger as any;
    if (t.classList && (t.classList.contains("about-section") || t.classList.contains("what-i-do-cards") || t.classList.contains("career-section") || t.classList.contains("work-cards-container") || t.classList.contains("techstack-2d"))) {
      st.kill();
    }
  });

  // Use FromTo for sections to ensure they are visible if they are partially scrolled into view
  const revealSections = [".about-section", ".what-i-do-cards", ".career-section", ".work-cards-container", ".techstack-2d"];

  revealSections.forEach((selector) => {
    const section = document.querySelector(selector);
    if (!section) return;

    gsap.fromTo(section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          toggleActions: "play none none reverse",
          once: true
        }
      }
    );
  });

  if (document.querySelector(".career-section")) {
    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 40%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true
      },
    });

    careerTimeline
      .fromTo(".career-timeline", { maxHeight: "0%" }, { maxHeight: "100%", duration: 1 }, 0)
      .fromTo(".career-info-box", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.2, duration: 0.5 }, 0.2);
  }
}
