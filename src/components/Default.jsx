import React, { Component } from "react";
import "./styles/style.scss";
import Slider from "react-slick";
import data from "./datas/data.json";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {BsPersonFill, BsTelephoneFill, BsFillBrushFill, BsGeoAltFill} from "react-icons/bs";


class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Person />
      </React.Fragment>
    );
  }
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      appendDots: (dots) => (
        <ul style={{ margin: "10px 0", color: "white" }} className="slick-dots">
          {" "}
          {dots}{" "}
        </ul>
      ),
    };
    return (
      <React.Fragment>
        <section class="carousel">
          <div class="container">
            <div class="carousel-wrapper">
              <div class="carousel-title">
                <div class="carousel-nav">
                  <ul class="tab">
                    {data.map((data) => (
                      <li class="button-name">
                        |<a href={`/detail/?id=${data.id}`}>{data.nickname}</a>|
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="title-content">
                  <h1>Prayoga Adi Setyawan</h1>
                  <h4>UI/UX Designer</h4>
                </div>
              </div>
              <div class="carousel-content">
                <div class="autoplay">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    <div class="img-wrapper">
                      <img
                        src={require("./images/adi-car1.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require("./images/adi-car2.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require("./images/adi-car3.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require("./images/adi-car4.jpeg")}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              <div class="carousel-btn">
                <button id="slick-next" className="button" onClick={this.next}>
                  Next <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button
                  id="slick-previous"
                  className="button"
                  onClick={this.previous}
                >
                  <i class="fa-solid fa-arrow-left"></i> Prev
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <section>
        <div class="container">
          <div class="profile">
            {/* <!-- isi detail person--> */}
            <div class="person">
              {/* <!-- judul --> */}
              <div class="judul">
                <h1>Personal Details</h1>
                <p>people bio information</p>
              </div>
              {/* <!-- content person --> */}
              <div class="content-wrapper">
                <div class="detail">
                  <div class="icon">
                  <BsPersonFill/>
                  </div>
                  <div class="detail-data">
                    <h4>FULL NAME</h4>
                    <p>Prayoga Adi Setyawan</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                  <BsTelephoneFill/>
                  </div>
                  <div class="detail-data">
                    <h4>PHONE</h4>
                    <p>081333717212</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                  <BsFillBrushFill/>
                  </div>
                  <div class="detail-data">
                    <h4>HOBBY</h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                    <BsGeoAltFill/>
                  </div>
                  <div class="detail-data">
                    <h4>ADDRES</h4>
                    <p>Jalan Danau Maninjau 3 / G2F / 11</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="maps">
              <div class="judul">
                <h1>Favorite Place</h1>
                <p>I really want to go to this place every day</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2135998352323!2d112.6568273147271!3d-7.9768619942548975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sSMK%20Telkom%20Malang!5e0!3m2!1sen!2sid!4v1667227047660!5m2!1sen!2sid"
                title="maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Default;
