import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      options={{
        background: {
          color: "#1a1a2e", // Dark, cool background color
        },
        particles: {
          number: {
            value: 80, // Increased number of particles
          },
          color: {
            value: "#00d4ff", // Bright cyan particles for contrast
          },
          shape: {
            type: "circle", // Shape of the particles
          },
          opacity: {
            value: 0.7, // Slightly transparent particles
          },
          size: {
            value: 3, // Medium particle size
            random: true, // Randomize particle sizes for a natural effect
          },
          move: {
            enable: true,
            speed: 1.5, // Slower movement for a calming effect
            direction: "none", // Particles move randomly
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true, // Link particles together
            distance: 120, // Distance between connected particles
            color: "#00d4ff", // Matching color for links
            opacity: 0.5,
            width: 1,
          },
        },
        fpsLimit: 60, // Smooth animation
        detectRetina: true, // Optimize for high-DPI screens
      }}
    />
  );
};

export default ParticleBackground;
