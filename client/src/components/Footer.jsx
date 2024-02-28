import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4" align="left">
            <h5 className="text-white" align="left">
              Quick Links
            </h5>
            <hr />
            <ul style={{ fontSize: "18px" }}>
              <li>
                <a href="https://rg-tech.in/about-us">About Us</a>
              </li>
              <li>
                <a href="https://rg-tech.in/courses">Our Courses</a>
              </li>
              <li>
                <a href="https://rg-tech.in/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="https://rg-tech.in/job-openings">Career</a>
              </li>
              <li>
                <a href="https://rg-tech.in/terms-of-use">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
            <br />
            <h5 className="text-white" align="left">
              Contact Us
            </h5>
            <hr />
            <div style={{ fontSize: "25px" }}>
              <i className="bi bi-telephone" />
              <a href="tel:918250283017">&nbsp;&nbsp;+91 82502 83017</a>
              <br />
              <i className="bi bi-envelope" />
              <a href="mailto:rgtechnologiesjpg@gmail.com">
                &nbsp;&nbsp;Support Mail
              </a>
            </div>
            <br />
            <br />
            <h5 className="text-white" align="left">
              Follow Us
            </h5>
            <hr />
            <div className="row col-lg-12 sociallogo">
              <a href="https://wa.me/918250283017/" target="_blank">
                <i className="bi bi-whatsapp" />
              </a>
              <a
                href="https://www.linkedin.com/in/rg-technologies-781430178"
                target="_blank"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-4" align="text-center">
            <h5 className="text-white" align="left">
              Important Updates
            </h5>
            <hr />
          </div>
        </div>
        <hr />
        <div className="row">
          <div
            className="col-lg-12 codexio-footer"
            style={{ textAlign: "right" }}
          >
            <p>
              Copyright ©&nbsp;R.G.Technologies, {new Date().getFullYear()}
              &nbsp;|&nbsp;All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
