import React from "react";
import "../App.css";
import "./StoreSection.css";
import "aos/dist/aos.css";

function StoreSection() {
  return (
    <div className="store-container">
      <section className="store-section">
        <h1 className="section-title">Store</h1>
        <div
          className="store-copy"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h2>Coming Soon</h2>
        </div>
      </section>
    </div>
  );
}

export default StoreSection;
