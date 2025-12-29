import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection() {
  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          <div className="about-img-layout">
            <div className="image-container about-img">
              <AnimateOnScroll animation="fadeInUp" speed="normal">
                <img
                  src="/assets/images/dummy-img-600x400.jpg"
                  alt="About Us Image"
                  className="img-fluid"
                />
              </AnimateOnScroll>

              <div className="about-layout">
                <div className="d-flex flex-column">
                  <div className="card-about-wrapper">
                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                      <div className="card card-about">
                        <div className="d-flex flex-row align-items-center">
                          <span className="counter" data-target="15">
                            15
                          </span>
                          <span className="counter-detail">+</span>
                        </div>
                        <h6>Years of Experience in Web & Mobile Development</h6>
                      </div>
                    </AnimateOnScroll>
                  </div>
                  <div className="about-spacer"></div>
                </div>
                <div className="about-spacer"></div>
              </div>
            </div>
          </div>
          <div className="about-title">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>About Us</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">Who We Are & What Drives Us</h2>
              </AnimateOnScroll>

              <p>
                Cypher builds and scales digital products through high-quality
                web and mobile development, with a strong focus on clean
                architecture, modern technologies, and long-term reliability.
              </p>
              <p>
                Learn more about our approach, the people behind the work, and
                the principles that guide how we build and collaborate.
              </p>

              <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./service">Web Development</a>
                    </li>
                    <li>
                      <a href="./service">Mobile App Development</a>
                    </li>
                    <li>
                      <a href="./service">Custom Software Solutions</a>
                    </li>
                  </ul>
                </div>

                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./service">API Integration & Backend Systems</a>
                    </li>
                    <li>
                      <a href="./service">Maintenance & Support</a>
                    </li>
                    <li>
                      <a href="./service">AI & Automation Integration</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
