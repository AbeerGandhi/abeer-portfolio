import gsap from "gsap";
import SplitType from "split-type";
import Lenis from "lenis";

// Initial transition effects that are free from GSAP watermarks
export let lenis: Lenis | null = null;

export function initialFX() {
  document.body.style.overflowY = "auto";

  // Initialize Lenis for smooth scrolling (Free alternative to ScrollSmoother)
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  // Ensure content is visible
  const main = document.querySelector(".main-content-area");
  if (main) {
    main.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#050505",
    duration: 0.8,
    delay: 0.2,
  });

  const landingIntro = document.querySelector(".landing-intro");
  if (landingIntro) {
    // Replace GSAP SplitText with free SplitType
    const helloText = new SplitType(".hello-text", { types: "chars,lines" });
    const nameText = new SplitType(".name-text", { types: "chars,lines" });
    const rolePrefix = new SplitType(".role-prefix", { types: "chars,lines" });

    gsap.fromTo(
      [helloText.chars, nameText.chars, rolePrefix.chars],
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.02,
        delay: 0.3,
      }
    );

    const landingTextWord1 = new SplitType(".landing-h2-1", { types: "chars", charClass: "split-char" });
    const landingTextWord2 = new SplitType(".landing-h2-2", { types: "chars", charClass: "split-char" });

    // Instantly show the first word correctly
    gsap.set(".landing-h2-1", { opacity: 1, visibility: 'visible' });
    gsap.set(landingTextWord1.chars, { y: 0, opacity: 1 });

    // Ensure the second word is hidden properly but ready to fade in
    gsap.set(".landing-h2-2", { opacity: 1, visibility: 'visible' });
    gsap.set(landingTextWord2.chars, { y: 80, opacity: 0 });

    LoopText(landingTextWord1, landingTextWord2);
  }

  // Character reveal
  const charImg = document.querySelector(".character-2d-image");
  if (charImg) {
    gsap.fromTo(charImg,
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }
}

function LoopText(Text1: SplitType, Text2: SplitType) {
  const tl = gsap.timeline({ repeat: -1 });
  const pauseTime = 3; // Time each word stays visible
  const animTime = 1.2; // Time to transition

  // Word 1 (AI/ML) is already visible (set in initialFX)

  // 1. Transition Word 1 out (UP) and Word 2 in (UP from bottom)
  tl.to(Text1.chars, {
    y: -80,
    opacity: 0,
    duration: animTime,
    ease: "power3.inOut",
    stagger: 0.05
  }, `+=${pauseTime}`);

  tl.fromTo(Text2.chars,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: animTime,
      ease: "power3.inOut",
      stagger: 0.05
    }, "<"); // Starts at the same time as the previous animation

  // 2. Transition Word 2 out (UP) and Word 1 in (UP from bottom)
  tl.to(Text2.chars, {
    y: -80,
    opacity: 0,
    duration: animTime,
    ease: "power3.inOut",
    stagger: 0.05
  }, `+=${pauseTime}`);

  tl.fromTo(Text1.chars,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: animTime,
      ease: "power3.inOut",
      stagger: 0.05
    }, "<");
}
