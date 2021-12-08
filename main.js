document.querySelector("#logo").addEventListener("mouseover", () => {
  gsap
    .timeline({
      repeat: 0,
      defaults: {
        duration: 2,
      },
    })
    .to("#logo", {
      y: 100,
      ease: "slow",
    })
    .to("#logo", {
      y: 0,
      ease: "back",
    });
});

document.querySelector("#salesHero").addEventListener("dblclick", () => {
  gsap
    .timeline({
      repeat: 0,
      defaults: {
        duration: 1,
      },
    })
    .from("#salesHero", {
      borderRadius: "100%",
      x: 1000,
    })
    .to("#salesHero", {
      borderRadius: "0%",
      x: 0,
      ease: "elastic"
    });
});
