import React, { useEffect } from "react";
import "../App.css";
import "./HeroSection.css";
import "aos/dist/aos.css";

function HeroSection() {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div className="hero-container">
      <div className="hero-copy">
        <h2>Single Out Now</h2>
        <h1>Lost In Thoughts Of You</h1>
        <a href="https://linktr.ee/latinshui" target="_blank">
          <button className="hero-btn">Stream / Download </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
