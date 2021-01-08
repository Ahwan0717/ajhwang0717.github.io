import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Latin Shui
          {/* <i className="fab fa-react"></i> */}
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          {/* <div className="nav-menu-socials-container"> */}
          <ul
            className={
              this.state.clicked
                ? "nav-menu-socials active"
                : "nav-menu-socials"
            }
          >
            <li>
              <a
                href="https://open.spotify.com/artist/60wxfdsmJb2BekohKCPVVT?si=efKwonVkRUOHn0fVkleA5Q"
                target="_blank"
              >
                <i className="fab fa-spotify" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSGP2On9KrcheWlyQjyAIJg"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
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
          {/* </div> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
