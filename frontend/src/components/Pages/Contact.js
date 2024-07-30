import React from "react";
import "./styles/Contact.css";
import Footer from "./Footer";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const Contact = () => {
  return (
    <>
      <section className="contact-header">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2>How to Find Us</h2>
          <h5>Address and Directions</h5>

          <div className="row">
            <div className="col-lg-6">
              <img
                src={require("../../images/contact.jpg")}
                alt="Contact"
                className="contact-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="contact-details">
                <div className="detail-item">
                  <img src="marker.png" alt="Marker" className="icon" />
                  <div>
                    <b>Our Address</b>
                    <p>Gurgaon, Near Huda City Center Sector-44</p>
                  </div>
                </div>
                <div className="detail-item">
                  <img src="mobile-notch.png" alt="Phone" className="icon" />
                  <div>
                    <b>Phone</b>
                    <p>+1212121212</p>
                  </div>
                </div>
                <div className="detail-item">
                  <img src="time-check.png" alt="Open Hours" className="icon" />
                  <div>
                    <b>Open Hours</b>
                    <p>Mon-Sat 8:00am-4:30pm</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="address-info text-center">
                <h2>Our Address</h2>
                <h5>Providing a free visit to our Airways and Offices</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <MDBRow>
                <MDBCol lg="12">
                  <iframe
                    src="https://maps.google.com/maps?width=600px&amp;height=575&amp;hl=en&amp;q=Connaught+Place,+Delhi,+India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className="map-frame"
                    height="600"
                    width="100%"
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="contactModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
