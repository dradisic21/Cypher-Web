import React from "react";
import VideoButton from "../Video/InfoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function GuideBannerSection() {
  return (
    <>
      <div className="section-guide">
        <div className="guide-banner">
          <div className="hero-container">
            <AnimateOnScroll animation="fadeInUp" speed="normal">
              <div className="guide-content">
                <div className="guide-video-container">
                  <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                  <p>See How We Help Brands Grow</p>
                </div>
                <div className="d-flex flex-column gspace-2">
                  <h3 className="title-heading">
                    Build Better Digital Products with Cypher
                  </h3>
                  <p>
                    We help teams design and develop scalable web and mobile
                    applications using modern technologies and clean engineering
                    practices.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideBannerSection;
