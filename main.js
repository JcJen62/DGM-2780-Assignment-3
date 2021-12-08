document.querySelector("#logo").addEventListener("click", () => {
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

document.querySelector("#option").addEventListener("mouseover", () => {
  gsap
    .timeline({
      repeat: 0,
      defaults: {
        duration: 1,
      },
    })
    .from("#option", {
      borderRadius: "100%",
      x: 80,
    })
    .to("#option", {
      borderRadius: "0%",
      x: 0,
      ease: "elastic"
    });
});
