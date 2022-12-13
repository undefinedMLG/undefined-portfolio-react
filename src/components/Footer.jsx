import React, { Component } from "react";
import "./styles/style.scss";
import {FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div class="container">
            <div class="footer-connect">
              <h4>Connect With Us</h4>
              <a href="https://www.instagram.com/reyhanmd._">
                <FaInstagram/>
              </a>
              <a href="https://www.instagram.com/reyhanmd._">
               <FaYoutube/>
              </a>
              <a href="https://www.instagram.com/reyhanmd._">
               <FaTwitter/>
              </a>
            </div>
            <div class="footer-content">
              <div class="content-privacy">
                <p>Privacy Statement</p>
                <p>Term of Use</p>
              </div>
              <div class="content-copyright">
                <p>©Undefined. 2022</p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
