import React from "react";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyExperience from "./components/MyExperience";
import WaveBackground from "./components/WaveBackground";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      {/* Dynamic Wave Background */}
      <WaveBackground />

      {/* Portfolio Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <br />
        <br />
        <About />
        <br />
        <br />
        <Skills />

        <CardContainer />
        <br />
        <MyExperience />
        <br />
        <Contact />
      </div>
    </div>
  );
}
