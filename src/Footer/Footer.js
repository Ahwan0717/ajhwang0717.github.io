import React from "react";
import "../App.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <nav className="footer-items">
          {/* <div className="footer-container"> */}
          <ul className="footer-list">
            <li className="footer-item">Copyright Latin Shui</li>
            <li className="footer-item">Site design by Ariana Hwang</li>
            <li className="footer-item">Graphic design by Eun Hee Kwon</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
