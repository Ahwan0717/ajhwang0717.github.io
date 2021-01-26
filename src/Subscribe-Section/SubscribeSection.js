import React from "react";
import emailjs from "emailjs-com";
import "../App.css";
import "./SubscribeSection.css";
import "aos/dist/aos.css";

function SubscribeSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwt5d9x",
        "template_c9tfrlu",
        e.target,
        "user_cHaDT3An8hsHc9dHhPsZj"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="subscribe-container">
      <section className="subscribe-section">
        <h1 className="subscribe-title">Contact</h1>
        <div
          className="subscribe-form-container"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <form onSubmit={sendEmail}>
            <div className="form-input">
              <label className="form-label">
                Name
                <input type="text" className="form-control" name="name" />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Email
                <input type="email" className="form-control" name="email" />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Subject
                <input type="text" className="form-control" name="subject" />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Message
                <textarea
                  className="text-area"
                  cols="30"
                  rows="8"
                  name="message"
                ></textarea>
              </label>
            </div>
            <div>
              <input type="submit" className="btn" value="Send Message"></input>
            </div>
          </form>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
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
      </section>
    </div>
  );
}

export default SubscribeSection;
