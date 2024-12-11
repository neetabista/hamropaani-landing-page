import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div
          className="banner__bg--img"
          style={{ backgroundImage: `url("/images/background-1.png")` }}
        >
          <Container>
            <div className="banner__top">
              <div className="logo">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="banner__social--icons">
                <Link
                  to="https://www.facebook.com/sigmatechnepal"
                  target="_blank"
                  className="icon"
                >
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link to="#" className="icon">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </div>
            </div>
            <Row className="g-5">
              <Col lg={6}>
                <div className="banner__left">
                  <div className="banner__left--content">
                    <h2 className="banner__title">
                      <span>We are</span>
                      <br /> Coming Soon
                    </h2>
                    <p className="banner__subtitle">
                      Our exciting new website is coming soon! Check back
                      later...
                    </p>
                    <p className="info">
                      <i className="bx bxs-phone"></i>
                      <span>+977 9801913945</span>
                    </p>
                    <p className="info">
                      <i className="bx bxs-envelope"></i>

                      <span> info@sigmatechnologies.com.np</span>
                    </p>

                    <p className="info">
                      <i className="bx bxs-map"></i>
                      <span>
                        Aspen Marg, St. Xavier's College Road, Maitighar,
                        Kathmandu, Nepal
                      </span>
                    </p>
                  </div>

                  <div className="footer__credit">
                    Powered By:
                    <Link to="https://infinityinfosys.com/" target="_blank">
                      Infinity Infosys Pvt. Ltd.
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="banner__right">
                  <div className="product">
                    <img
                      src="/images/products.png"
                      alt="mattress"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="bottom-img">
            <img
              src="/images/bg_img.png"
              alt="image"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
