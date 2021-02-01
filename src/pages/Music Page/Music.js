import React from "react";
import "./MusicPage.css";
import { MusicItems } from "./MusicItems";

function MusicPage() {
  return (
    <div className="music-page-container">
      <h1 className="section-title">Music</h1>
      <div className="music-items-container">
        {MusicItems.map((song, index) => {
          return (
            <li key={index} className="single-item">
              <div className="img-overlay-container">
                <img
                  src={song.imgName}
                  className="single-img"
                  alt="latin shui music release"
                />
                <div class="middle">
                  <div class="text">
                    <a
                      className={song.cName}
                      href={song.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Stream/Download
                    </a>
                  </div>
                </div>
              </div>
              <a
                className={song.cName}
                href={song.url}
                target="_blank"
                rel="noreferrer"
              >
                {song.title}
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default MusicPage;
