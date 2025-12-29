import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      {/* <img src="/assets/images/marko-logo.png" alt="Logo" className="site-logo img-fluid" /> */}
                      <p>Logo</p>
                    </div>
                    <h4>Engineering Digital Products for Real-World Use</h4>
                    <p>
                      We help businesses turn ideas into robust web and mobile
                      applications through thoughtful design and solid
                      engineering.
                    </p>
                  </div>
                </div>

                <div className="col col-lg-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/service">Service</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-services-container">
                    <h5>Services</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/single_services">Mobile Development</a>
                      </li>
                      <li>
                        <a href="/single_services">Web Development</a>
                      </li>
                      <li>
                        <a href="/single_services">Custom Software Solution</a>
                      </li>
                      <li>
                        <a href="/single_services">
                          API Integration & Backend Systems
                        </a>
                      </li>
                      <li>
                        <a href="/single_services">Maintenance & Support</a>
                      </li>
                      <li>
                        <a href="/single_services">AI & Automation Integration</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-contact-container">
                    <h5>Contact Info</h5>
                    <ul className="contact-list">
                      <li>info@cypher.com</li>
                      <li>31000 Osijek, Croatia</li>
                    </ul>
                    <div className="d-flex flex-column gspace-1">
                      <h5>Social Media</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a
                            href="https://facebook.com"
                            className="social-item"
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://youtube.com" className="social-item">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://instagram.com"
                            className="social-item"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://linkedin.com"
                            className="social-item"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-content-spacer"></div>
            </div>

            <div className="copyright-container">
              <span className="copyright">
                © 2025 Cypher. All Rights Reserved.
              </span>
              <div className="d-flex flex-row gspace-2">
                <a href="#" className="legal-link">
                  Terms of Service
                </a>
                <a href="#" className="legal-link">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
