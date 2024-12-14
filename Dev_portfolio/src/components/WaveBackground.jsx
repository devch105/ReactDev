import React from "react";
import Wavify from "react-wavify";

const WaveBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: "#1B1B1A", // Dark background
        backgroundImage: "radial-gradient(#2e2e2e 1px, transparent 1px)", // Dotted background
        backgroundSize: "20px 20px", // Control dot spacing
      }}
    >
      <Wavify
        fill="#facc15" // Glowish yellow color
        paused={false}
        options={{
          height: 160, // Increased height of the wave
          amplitude: 200, // Increased amplitude for a more dramatic wave
          speed: 0.2, // Slightly faster animation
          points: 8, // Smoother wave with more points
        }}
        style={{
          position: "absolute",
          bottom: "40%", // Increased from 20% to 40% for higher placement
          zIndex: 0,
          filter: "drop-shadow(0px 0px 15px #facc15)", // Glow effect
        }}
      />
    </div>
  );
};

export default WaveBackground;
