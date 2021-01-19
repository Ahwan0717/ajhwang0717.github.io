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
              <img
                src={song.imgName}
                className="single-img"
                alt="latin shui music release"
              />
              {console.log(song.imgName)}
              <a className={song.cName} href={song.url}>
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
