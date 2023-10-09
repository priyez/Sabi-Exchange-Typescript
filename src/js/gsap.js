gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".zenno__slider-slide");

gsap.to(sections, {
  xPercent: -200 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".zenno__slider-wrapper",
    pin: ".zenno",
    pinSpacing: true,
    scrub: 20,
    end: "+=1000",
  },
});
