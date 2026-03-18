declare module 'gsap-trial/SplitText' {
    export class SplitText {
        constructor(targets: string | Element | (string | Element)[], vars?: object);
        chars: HTMLElement[];
        lines: HTMLElement[];
        words: HTMLElement[];
        revert(): void;
    }
}

declare module 'gsap-trial/ScrollSmoother' {
    export class ScrollSmoother {
        static refresh(arg0: boolean) {
          throw new Error("Method not implemented.");
        }
        static create(vars: object): ScrollSmoother;
        static get(): ScrollSmoother;
        scrollTop(value?: number): number;
        scrollTo(target: any, smooth?: boolean, position?: string): void;
        paused(value?: boolean): boolean;
        refresh(soft?: boolean): void;
        kill(): void;
    }
}
