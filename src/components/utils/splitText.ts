import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * REPLACEMENT FOR GSAP-TRIAL SPLITTEXT
 * Using the free 'split-type' library to avoid the trial watermark.
 * Works identically for word and character splitting.
 */

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitType;
}

let isInitialized = false;

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.kill();
      para.split?.revert();
    }

    // Split text into lines/words
    para.split = new SplitType(para, { types: 'lines,words', lineClass: 'split-line' });

    para.anim = gsap.fromTo(
      para.split.words,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          invalidateOnRefresh: true,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.kill();
      title.split?.revert();
    }

    // Split text into chars/lines
    title.split = new SplitType(title, { types: 'chars,lines', lineClass: 'split-line' });

    title.anim = gsap.fromTo(
      title.split.chars,
      { opacity: 0, y: 80, rotate: 10 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          invalidateOnRefresh: true,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  if (!isInitialized) {
    ScrollTrigger.addEventListener("refresh", () => {
    });
    isInitialized = true;
  }
}
