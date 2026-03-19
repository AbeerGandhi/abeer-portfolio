import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GUTTED GSAP SCROLL REALS
 * In response to user feedback, all "reveal" logic that uses opacity/translate 
 * has been disabled to ensure a stable, "normal website" loading experience. 
 * Sections will now be visible immediately without relying on ScrollTriggers.
 */

export function setCharTimeline() {
  // No-op to prevent visibility glitches on the landing section
}

export function setAllTimeline() {
  // No-op to prevent visibility glitches on standard page sections
  // We keep the plugin registered for other non-destructive tools if needed
}

// Any other specific animations that are constructive (like career timelines) 
// can stay if they don't hide entire sections.
export function setCareerTimeline() {
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
