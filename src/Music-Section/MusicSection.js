import React from "react";
import "../App.css";
import "./MusicSection.css";
import musicSingle from "./music-single.png";

function MusicSection() {
  return (
    <div className="music-container">
      <section className="music-section">
        <h1 className="section-title">Music</h1>
        <div className="music-release-container">
          <img
            className="music-release"
            src={musicSingle}
            alt="lost in thoughts of you single release"
          />
          <div className="music-copy-container">
            <div className="music-copy">
              <p className="music-text">Out Now</p>
              <h2 className="sub-heading">Lost In Thoughts Of You</h2>
              <a href="https://linktr.ee/latinshui" target="_blank">
                <button className="hero-btn">Stream / Download </button>
              </a>
              <div className="more-links-container">
                <a className="more-links" href="#" rel="noreferrer">
                  View All Releases
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="music-copy-container">
          <div className="music-copy">
            <p className="music-text">Out Now</p>
            <h2 className="sub-heading">Lost In Thoughts Of You</h2>
            <a href="https://linktr.ee/latinshui" target="_blank">
              <button className="hero-btn">Stream / Download </button>
            </a>
            <div className="more-links-container">
              <a className="more-links" href="#" rel="noreferrer">
                View All Releases
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default MusicSection;
