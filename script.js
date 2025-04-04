tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800
      }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.2,
      random: true
    },
    size: {
      value: { min: 1, max: 4 }
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  }
});
