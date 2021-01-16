import React from "react";
import emailjs from "emailjs-com";
import "../App.css";
import "./SubscribeSection.css";

function SubscribeSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "YOUR_TEMPLATE_ID",
        e.target,
        "user_cHaDT3An8hsHc9dHhPsZj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="subscribe-container">
      <section className="subscribe-section">
        <h1 className="subscribe-title">Subscribe</h1>
        <div className="subscribe-form-container">
          <form onSubmit={sendEmail}>
            <div className="form-input">
              <label className="form-label">
                Name
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Email
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Subject
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </label>
            </div>
            <div className="form-input">
              <label className="form-label">
                Message
                <textarea
                  //   className="form-control"
                  className="text-area"
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </label>
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SubscribeSection;
