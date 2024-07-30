import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Axios from "axios";
import "./styles/About.css";

const About = () => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:5000/getreview").then((resp) =>
      setData({ ...resp.data[0] })
    );
    Axios.get("http://localhost:5000/getreview").then((resp) =>
      setData1({ ...resp.data[1] })
    );
    Axios.get("http://localhost:5000/getreview").then((resp) =>
      setData2({ ...resp.data[2] })
    );
  }, []);

  return (
    <div>
      <div className="about-header">
        <div className="container text-center">
          <h2>About Us</h2>
        </div>
      </div>

      <section className="about-details">
        <div className="container text-center">
          <h3>About Our Airways</h3>
          <h5>Our goals and values</h5>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={require("../../images/airhostess.jpg")}
              alt="Air Hostess"
              className="about-img"
            />
          </div>
          <div className="col-md-6 about-text">
            <p>
              Our focus is on your overall well-being and helping you avail
              luxurious flights at minimal costs. We provide state-of-the-art
              facilities in all our airways.
            </p>
            <div className="about-mission">
              <img
                src={require("../../images/nc1.png")}
                alt="Mission"
                className="about-icon"
              />
              <div>
                <b>Our Mission</b>
                <p>
                  To make our flights easy, comfortable and reliable for you
                </p>
              </div>
            </div>
            <div className="about-professionals">
              <img
                src={require("../../images/nc4.png")}
                alt="Professionals"
                className="about-icon"
              />
              <div>
                <b>Professionals in our Airways</b>
                <p>Providing a high-class facility for every journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-promo text-center">
        <div className="container">
          <h1>Come fly with us and you could win the TRIP OF A LIFETIME</h1>
          <img
            src={require("../../images/about1.jpg")}
            alt="Promo"
            className="about-promo-img"
          />
        </div>
      </section>

      <section className="about-clients text-center">
        <div className="container">
          <h2>Our Happy Clients</h2>
          <p>What people say about us</p>
          <Carousel>
            <Carousel.Item interval={1000}>
              <p>
                {data.fname} {data.lname}: {data.review}
              </p>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <p>
                {data1.fname} {data1.lname}: {data1.review}
              </p>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <p>
                {data2.fname} {data2.lname}: {data2.review}
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className="about-comfort py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <video className="w-100" autoPlay loop muted>
              <source
                src={require("../../images/InsideTheWorldsBiggestPassengerPlane.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>Your comfort is our priority</h2>
              <p>
                We provide the most comfortable flights ever. You will feel at
                home when you board the flight. Our staff treats you like
                family.
              </p>
              <button type="button" className="btn btn-success">
                More Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
