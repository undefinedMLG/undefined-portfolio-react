import React, { Component } from "react";
import "./styles/style.scss";
import fotbar from "./images/fotbar.png";
import data from "./datas/data.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BsArrowRight} from "react-icons/bs";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Navbar Section */}
        <div class="container">
          <header>
            <Navbar />
          </header>
        </div>
        {/* End of Navbar */}

        {/* Hero Section  */}
        <section class="hero" id="hero">
          <div class="container">
            <div class="hero-wrapper">
              <Hero />
            </div>
          </div>
        </section>
        {/* End of Hero Section  */}

        {/* About Us Section  */}
        <section class="aboutus" id="aboutus">
          <div class="container">
            <div class="aboutus-wrapper">
              <Aboutus />
            </div>
          </div>
        </section>
        {/* End of About Us */}

        <footer id="footer">
          <div class="container">
            <Footer />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

function Hero() {
  return (
    <React.Fragment>
      <div class="hero-content">
        <div class="hero-content-title">
          <h1>UNDEFINED</h1>
        </div>
        <div class="hero-content-info">
          <div class="info-build">
            <h5>24/10/2k22</h5>
            <div class="line-hero"></div>
            <h6>Created On</h6>
          </div>
          <div class="info-desc">
            <p>
              Haloo Semua, kenalin kami dari kelompok 6 TEFA MLG bidang
              Frontend. Cari tahu yuk siapa aja membernya!
            </p>
          </div>
        </div>
        <div class="hero-content-tagline">
          <h3>yang penting JJ</h3>
        </div>
        <div class="hero-content-btn">
          <a href="#aboutus">VIEW TEAM</a>
        </div>
      </div>
      <div class="hero-video">
        {/* <!-- <video controls src="assets/videos/team-jj.mp4"></video> --> */}
        <iframe
          title="video_jj"
          width="553"
          height="314"
          src="https://www.youtube.com/embed/knk1mipy0Ss?rel=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </React.Fragment>
  );
}

class Aboutus extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="team-foto">
          <img src={fotbar} alt="" class="fotbar" />
          <a href="/detail">
            Show Details
            <BsArrowRight />
          </a>
        </div>
        <div class="aboutus-content">
          <div class="aboutus-content-title">
            <h1>ABOUT US</h1>
          </div>
          <div class="aboutus-content-main">
            <Data />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function Data() {
  return data.map((data) => (
    <div class="aboutus-person">
      <div class="person-img">
        <img src={require(`./images/${data.image}`)} alt="" />
        <div class="line-person"></div>
        <h4>{data.nickname}</h4>
        <div class="line-person"></div>
      </div>
      <div class="person-content">
        <p>{data.deskripsi}</p>
      </div>
    </div>
  ));
}

export default Home;
