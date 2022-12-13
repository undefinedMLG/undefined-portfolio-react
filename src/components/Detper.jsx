import React, { Component } from "react";
import "./styles/style.scss";
import Slider from "react-slick";
import data from "./datas/data.json";
import {
  BsArrowRight,
  BsArrowLeft,
  BsPersonFill,
  BsTelephoneFill,
  BsFillBrushFill,
  BsGeoAltFill,
} from "react-icons/bs";

class Detper extends Component {
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
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const type = params.get("id");
    const id = parseInt(type);
    let id2 = data[id - 1];

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      appendDots: (dots) => (
        <div
          style={{
            color: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px", color: "white" }}> {dots} </ul>
        </div>
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
                  <h1>{id2.fullname}</h1>
                  <h4>{id2.hobby}</h4>
                </div>
              </div>
              <div class="carousel-content">
                <div class="autoplay">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    <div class="img-wrapper">
                      <img
                        src={require(`./images/${id2.imagecar1}`)}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require(`./images/${id2.imagecar2}`)}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require(`./images/${id2.imagecar3}`)}
                        alt=""
                      />
                    </div>
                    <div class="img-wrapper">
                      <img
                        src={require(`./images/${id2.imagecar4}`)}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              <div class="carousel-btn">
                <button id="slick-next" className="button" onClick={this.next}>
                  Next <BsArrowRight />
                </button>
                <button
                  id="slick-previous"
                  className="button"
                  onClick={this.previous}
                >
                  <BsArrowLeft />
                  Prev
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
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const type = params.get("id");
    const id = parseInt(type);
    let id2 = data[id - 1];
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
                    <BsPersonFill />
                  </div>
                  <div class="detail-data">
                    <h4>FULL NAME</h4>
                    <p>{id2.fullname}</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                    <BsTelephoneFill />
                  </div>
                  <div class="detail-data">
                    <h4>PHONE</h4>
                    <p>{id2.nohp}</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                    <BsFillBrushFill />
                  </div>
                  <div class="detail-data">
                    <h4>HOBBY</h4>
                    <p>{id2.hobby}</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="icon">
                    <BsGeoAltFill />
                  </div>
                  <div class="detail-data">
                    <h4>ADDRES</h4>
                    <p>{id2.alamat}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="maps">
              <div class="judul">
                <h1>Favorite Place</h1>
                <p>I really want to go to this place every day</p>
              </div>
              <iframe src={id2.map} title="maps"></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Detper;
