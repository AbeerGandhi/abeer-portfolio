import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

export let smoother: ScrollSmoother | null = null;

export const setSmoother = (value: ScrollSmoother | null) => {
    smoother = value;
};
