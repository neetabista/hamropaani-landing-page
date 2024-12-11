import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BannerBgImage,
  BannerBottomImage,
  BannerContainer,
  BannerInfo,
  BannerLeft,
  BannerLeftContent,
  BannerLogo,
  BannerRight,
  BannerSocialIcons,
  BannerTitle,
  BannerTop,
  FooterCredit,
} from "./style";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerBgImage
          style={{ backgroundImage: `url("/images/background-1.png")` }}
        >
          <Container>
            <BannerTop>
              <BannerLogo>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </BannerLogo>

              <BannerSocialIcons>
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
              </BannerSocialIcons>
            </BannerTop>
            <Row className="g-5">
              <Col lg={6}>
                <BannerLeft>
                  <BannerLeftContent>
                    <BannerTitle>
                      <span>We are</span>
                      <br /> Coming Soon
                    </BannerTitle>
                    <p className="banner__subtitle">
                      Our exciting new website is coming soon! Check back
                      later...
                    </p>
                    <BannerInfo>
                      <i className="bx bxs-phone"></i>
                      <span>+977 9801913945</span>
                    </BannerInfo>
                    <BannerInfo>
                      <i className="bx bxs-envelope"></i>

                      <span> info@sigmatechnologies.com.np</span>
                    </BannerInfo>

                    <BannerInfo>
                      <i className="bx bxs-map"></i>
                      <span>
                        Aspen Marg, St. Xavier's College Road, Maitighar,
                        Kathmandu, Nepal
                      </span>
                    </BannerInfo>
                  </BannerLeftContent>

                  <FooterCredit>
                    Powered By:
                    <Link to="https://infinityinfosys.com/" target="_blank">
                      Infinity Infosys Pvt. Ltd.
                    </Link>
                  </FooterCredit>
                </BannerLeft>
              </Col>

              <Col lg={6}>
                <BannerRight>
                  <img
                    src="/images/products.png"
                    alt="mattress"
                    width="100%"
                    height="100%"
                  />
                </BannerRight>
              </Col>
            </Row>
          </Container>
          <BannerBottomImage>
            <img
              src="/images/bg_img.png"
              alt="image"
              width="100%"
              height="100%"
            />
          </BannerBottomImage>
        </BannerBgImage>
      </BannerContainer>
    </>
  );
};

export default Banner;
