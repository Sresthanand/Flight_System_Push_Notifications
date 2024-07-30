import React from "react";
import "./styles/Home.css";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="content-section">
        <div className="image-card">
          <img
            src={require("../../images/Destinations_Dekstop.png")}
            alt="Destinations"
          />
          <div className="card-content">
            <h5>
              <strong>
                Discover the destinations you can
                <br /> travel with FAST Airways
              </strong>
            </h5>
          </div>
        </div>
        <div className="image-card">
          <img
            src={require("../../images/Fasttrack_Desktop.jpg")}
            alt="Fast track service"
          />
          <div className="card-content">
            <h5>
              <strong>Enjoy our Fast track service</strong>
            </h5>
          </div>
        </div>
        <div className="image-card">
          <img
            src={require("../../images/Alfursan_Destop.jpg")}
            alt="Loyalty program"
          />
          <div className="card-content">
            <h5>
              <strong>Learn more about our loyalty program</strong>
            </h5>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <div className="experience-text">
          <h1>Exceptional experiences with FAST Airways</h1>
          <h5>
            Explore the world, earn rewards, and live the best adventures with
            FAST Airways.
          </h5>
        </div>
        <div className="cards-row">
          <div className="card">
            <img
              src={require("../../images/Large-Sustainability.jpg")}
              alt="Sustainability"
            />
            <div className="card-body">
              <h5>
                <strong>Ensure a sustainable future</strong>
              </h5>
              <p>
                Help us reduce our carbon footprint and get rewarded! Join us
                and earn Greens Points for every action you take to help us
                reduce waste of food, fuel, and materials.
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../../images/Large-experiences.jpg")}
              alt="Onboard experiences"
            />
            <div className="card-body">
              <h5>
                <strong>Time flies on board FAST Airways</strong>
              </h5>
              <p>
                Sit back, relax, and enjoy your flight with our onboard
                services. Learn more about our dining options and inflight
                entertainment.
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src={require("../../images/Large-Upgrade.jpg")}
              alt="Upgrade options"
            />
            <div className="card-body">
              <h5>
                <strong>Let's get you upgraded</strong>
              </h5>
              <p>
                Here's your chance to upgrade to a higher class. Place a bid and
                experience the best in comfort, services, and entertainment.
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-section">
        <div className="header-content">
          <h1>Start your journey with FAST Airways</h1>
          <h4>
            Exclusive offers, special offers, and amazing rewards await for
            premium membership holders
          </h4>
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Join Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
