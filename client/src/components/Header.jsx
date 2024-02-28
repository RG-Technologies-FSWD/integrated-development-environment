import React from "react";

const Header = () => {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 col-lg-8 d-flex align-items-center">
            <p className="mb-0 phone">
              <span className="mailus">
                <b>
                  <i className="bi bi-buildings"></i>&nbsp;&nbsp;Netaji
                  Subhash Chandra Bose Road,Besides Touch Nursing Home, Rajbari
                  Para, 735101
                </b>
              </span>
            </p>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-end">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <a href="tel:918250283017">
                  <i
                    className="bi bi-telephone"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                </a>
                <a href="mailto:rgtechnologiesjpg@gmail.com">
                  <i
                    className="bi bi-envelope"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                </a>
                <a href="https://wa.me/918250283017/" target="_blank">
                  <i
                    className="bi bi-whatsapp"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rg-technologies-781430178"
                  target="_blank"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                </a>
                <a href="https://rg-tech.in/admin/login">
                  <i
                    className="bi bi-gear-fill"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
