import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#04133b",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 1
            }
          },
          bubble: {
            distance: 550,
            size: 400,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            quantity: 3,
          },
          remove: {
            quantity: 1,
          }
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false,
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          value: 140,
          density: {
            enable: true,
            value_area: 900,
          },
        },
        opacity: {
          value: 0.4,
          random: false,
          anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            quantity: 7
        }
      },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
                enable: true,
                speed: 50,
                size_min: 0.1,
                sync: false
            }
          },
          rotate: {
            value: 360,
            direction: "random",
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
        },
      },
      detectRetina: true,
    }), // moved the closing parenthesis for useMemo here
    [] // moved the dependencies array here
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;