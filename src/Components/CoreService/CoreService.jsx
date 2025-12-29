import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function CoreService() {
  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column justify-content-center text-center gspace-5">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-2">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Our Core Services</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">
                Development Services Built for Modern Products
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
            {/* LEFT COLUMN */}
            <div className="col">
              <div className="pricing-container">
                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                  <div className="card card-pricing-title">
                    <div className="spacer" />
                    <div className="content">
                      <h3 className="title-heading">
                        Let’s Build the Right Solution for Your Product
                      </h3>
                      <div className="link-wrapper">
                        <a href="./contact">Get in Touch</a>
                        <i className="fa-solid fa-arrow-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <div className="card card-pricing">
                    <h4>Web Development</h4>
                    <p>Modern web applications built to scale</p>

                    <p className="mb-0">
                      We design and develop high-quality web solutions focused on
                      performance, security, and long-term maintainability.
                    </p>

                    <a href="./service" className="btn btn-accent">
                      <div className="btn-title">
                        <span>Explore Services</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {/* MIDDLE COLUMN (HIGHLIGHT) */}
            <div className="col">
              <AnimateOnScroll animation="fadeInUp" speed="slow">
                <div className="card card-pricing pricing-highlight">
                  <div className="spacer" />
                  <h4>Custom Software Solutions</h4>
                  <p>Tailored systems built around your requirements</p>

                  <p className="mb-0">
                    We build custom software that solves real business problems,
                    with clean architecture and scalable foundations.
                  </p>

                  <a href="./service" className="btn btn-accent">
                    <div className="btn-title">
                      <span>Explore Services</span>
                    </div>
                    <div className="icon-circle">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>

                  <div className="core-benefits">
                    <div className="benefit">
                      <i className="fa-solid fa-brain"></i>
                      <span>Clean Architecture</span>
                    </div>
                    <div className="benefit">
                      <i className="fa-solid fa-shield-halved"></i>
                      <span>Secure & Reliable Systems</span>
                    </div>
                    <div className="benefit">
                      <i className="fa-solid fa-bug"></i>
                      <span>Quality-Focused Delivery</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col">
              <div className="pricing-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                  <div className="card pricing-highlight-box">
                    <div className="d-flex flex-column gspace-2 w-100">
                      <h5>Engineering Focused. Product Driven.</h5>
                      <div className="d-flex flex-column gspace-2">
                        <div className="pricing-highlights">
                          <span>Scalable Web & Mobile Solutions</span>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <span>Modern Tech & Maintainable Code</span>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                        <div className="pricing-highlights">
                          <span>Long-Term Support & Improvements</span>
                          <i className="fa-solid fa-arrow-circle-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="spacer" />
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <div className="card card-pricing">
                    <h4>Mobile Development</h4>
                    <p>Native & cross-platform mobile applications</p>

                    <p className="mb-0">
                      We develop mobile apps for iOS and Android with a focus on
                      performance, stability, and a smooth user experience.
                    </p>

                    <a href="./service" className="btn btn-accent">
                      <div className="btn-title">
                        <span>Explore Services</span>
                      </div>
                      <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreService;