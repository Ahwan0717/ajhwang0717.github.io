import React from "react";
import "./ComingSoon.css";
import LatinShui from "./latinshui.png";

function ComingSoonPage() {
  return (
    <div className="shop-page-container">
      <h1 className="section-title">Coming Soon</h1>
      <div className="logo-container">
        <img
          className="latin-shui-logo"
          src={LatinShui}
          alt="latin shui logo"
        />
      </div>
      <div>
        <ul className="contact-socials">
          <li className="social">
            <a
              href="https://open.spotify.com/artist/60wxfdsmJb2BekohKCPVVT?si=efKwonVkRUOHn0fVkleA5Q"
              target="_blank"
            >
              <i className="fab fa-spotify" />
            </a>
          </li>
          <li className="social">
            <a
              href="https://www.youtube.com/channel/UCSGP2On9KrcheWlyQjyAIJg"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
          </li>
          <li className="social">
            <a href="https://soundcloud.com/latinshui" target="_blank">
              <i className="fab fa-soundcloud" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/latinshui/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComingSoonPage;
