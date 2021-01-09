import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-copy">
        <h2>Single Out Now</h2>
        <h1>E. automate</h1>
        <a href="https://linktr.ee/latinshui" target="_blank">
          <button className="hero-btn">Stream / Download </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
