import React from "react";
import InfoButton from "../Video/InfoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {
  return (
    <div className="section-banner">
      <AnimateOnScroll animation="fadeInUp">
        <div className="banner-video-container keep-dark">
          <div id="banner-video-background"></div>
          <div className="hero-container position-relative">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInLeft" speed="normal">
                <h1 className="title-heading-banner">
                  Build Powerful Web & Mobile Solutions That Scale
                </h1>
              </AnimateOnScroll>
              <div className="banner-heading">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <div className="banner-video-content order-lg-1 order-2">
                    <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                      <InfoButton />
                      <p>
                        Learn more about Cypher and how we build high-quality
                        web and mobile applications tailored to your business.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInRight" speed="normal">
                  <div className="banner-content order-lg-2 order-1">
                    <p>
                      Cypher helps businesses build and scale digital products
                      through high-quality web and mobile development, combining
                      clean architecture, modern technologies, and
                      performance-driven solutions.
                    </p>
                    <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                      <a href="./contact" className="btn btn-accent">
                        <div className="btn-title">
                          <span>Get Started</span>
                        </div>
                        <div className="icon-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </a>
                      <div className="banner-reviewer">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="/assets/images/dummy-img-400x400.jpg"
                            alt="Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/assets/images/dummy-img-400x400.jpg"
                            alt="Reviewer"
                            className="avatar"
                          />
                          <img
                            src="/assets/images/dummy-img-400x400.jpg"
                            alt="Reviewer"
                            className="avatar"
                          />
                        </div>
                        <div className="detail">
                          <span>2.7k Positive</span>
                          <span>Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default BannerHomeSection;
