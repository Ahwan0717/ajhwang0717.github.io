import React from "react";
import "../App.css";
import "./MusicSection.css";

function MusicSection() {
  return (
    <div className="music-container">
      <section className="music-section">
        <h1 className="section-title">Music</h1>
        <div className="music-copy">
          <p>Out Now</p>
          <h2>E.automate</h2>
          <a href="https://linktr.ee/latinshui" target="_blank">
            <button className="hero-btn">Stream / Download </button>
          </a>
          <div className="more-links-container">
            <a className="more-links" href="#">
              View All Releases
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MusicSection;
