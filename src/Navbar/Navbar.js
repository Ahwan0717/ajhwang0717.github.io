import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo3 from "./logo3.png";
import { HashLink } from "react-router-hash-link";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <img className="navbar-logo" src={logo3} alt="latin shui logo" />
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "Contact") {
              return (
                <li key={index}>
                  <HashLink className={item.cName} to="/#contact">
                    {item.title}
                  </HashLink>
                </li>
              );
            }
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
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
                rel="noreferrer"
              >
                <i className="fab fa-spotify" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSGP2On9KrcheWlyQjyAIJg"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/latinshui"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-soundcloud" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/latinshui/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
