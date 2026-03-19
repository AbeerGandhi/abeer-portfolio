import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setCharTimeline() {
  const landing = document.querySelector(".landing-section");
  if (!landing) return;

  // Kill existing ScrollTriggers specifically for landing to avoid duplicates
  ScrollTrigger.getAll().forEach((st: any) => {
    const trigger = st.trigger;
    if (!trigger) return;

    if (typeof trigger === 'string') {
      if (trigger.includes("landing")) st.kill();
    } else {
      // Element check
      try {
        if (trigger.classList && (trigger.classList.contains("landing-section") || trigger.closest?.(".landing-section"))) {
          st.kill();
        }
      } catch (e) {
        // Fallback if trigger is not a DOM element we can inspect
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
      .to(".landing-container", { opacity: 0, y: -100, ease: "none" }, 0);
  }
}

export function setAllTimeline() {
  // Clear old triggers
  ScrollTrigger.getAll().forEach((st: any) => {
    const trigger = st.trigger;
    if (!trigger) return;

    const revealSelectors = [".about-section", ".what-i-do-cards", ".career-section", ".work-cards-container", ".techstack-2d"];

    if (typeof trigger === 'string') {
      if (revealSelectors.some(s => trigger.includes(s.replace('.', '')))) {
        st.kill();
      }
    } else {
      try {
        if (revealSelectors.some(s => {
          if (trigger.matches && trigger.matches(s)) return true;
          if (trigger.closest && trigger.closest(s)) return true;
          return false;
        })) {
          st.kill();
        }
      } catch (e) { }
    }
  });

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

  const careerSection = document.querySelector(".career-section");
  if (careerSection) {
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
