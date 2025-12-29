import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-lg-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <img
                    src="/assets/images/dummy-img-600x400.jpg"
                    alt="Expertise Image"
                    className="img-fluid"
                  />
                </AnimateOnScroll>
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <AnimateOnScroll animation="fadeInDown" speed="normal">
                        <div className="card card-expertise">
                          <h4>Looking for a Reliable Development Partner?</h4>
                          <p>
                            Let’s build scalable web and mobile solutions
                            tailored to your product and business needs.
                          </p>
                          <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                            <a href="./contact">Get in Touch</a>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Our Expertise</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Engineering Scalable Web & Mobile Solutions
                </h2>
              </AnimateOnScroll>
              <p>
                At Cypher, we design and develop high-quality web and mobile
                applications focused on performance, scalability, and real
                business needs.
              </p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We Do Best</h5>
                  <ul className="check-list">
                    <li>
                      <p>Mobile Development</p>
                    </li>
                    <li>
                      <p>Web Development</p>
                    </li>
                    <li>
                      <p>Custom Software Solution</p>
                    </li>
                    <li>
                      <p>API Integration & Backend Systems</p>
                    </li>
                    <li>
                      <p>Maintenance & Support</p>
                    </li>
                    <li>
                      <p>AI & Automation Integration</p>
                    </li>
                  </ul>
                </div>

                <AnimateOnScroll animation="fadeInUp">
                  <div className="card card-expertise card-expertise-counter animate-box">
                    <div className="d-flex flex-row gspace-2 align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <CounterOnScroll
                          target={15}
                          suffix="+"
                          counterClassName="counter"
                          suffixClassName="counter-detail"
                        />
                      </div>
                      <h6>Years of Experience in Web & Mobile Development</h6>
                    </div>
                    <p>
                      We bring years of hands-on experience building reliable
                      web and mobile applications with a strong focus on
                      performance, scalability, and clean code.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertiseSection;
