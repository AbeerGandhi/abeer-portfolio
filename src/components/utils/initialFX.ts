import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);

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
    const landingText = new SplitText(
      [".hello-text", ".name-text", ".role-prefix"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );

    gsap.fromTo(
      landingText.chars,
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

    let TextProps = { type: "chars,lines", linesClass: "split-h2" };

    const landingTextWord1 = new SplitText(".landing-h2-1", TextProps);
    const landingTextWord2 = new SplitText(".landing-h2-2", TextProps);

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

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.05,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.05,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.05,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.05,
        delay: delay2,
      },
      1
    );
}
