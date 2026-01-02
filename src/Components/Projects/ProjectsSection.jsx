import React, { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { projectsData } from "../../Data/ProjectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function ProjectsSection() {
  const swiperRef = useRef(null);

  const slides = useMemo(() => projectsData, []);

  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column gspace-5">
          <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column gspace-2 text-center">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Selected Projects</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">
                Work That We’ve Built and Shipped
              </h2>
              <p className="mb-0">
                A selection of web and mobile projects focused on clean
                architecture, performance, and real-world usability.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="projects-showcase">
            <Swiper
              modules={[Navigation, EffectCreative]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              speed={900}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -220],
                  rotate: [0, 0, -8],
                  opacity: 0.35,
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -220],
                  rotate: [0, 0, 8],
                  opacity: 0.35,
                },
              }}
              navigation={{
                nextEl: ".projects-nav-next",
                prevEl: ".projects-nav-prev",
              }}
              className="projects-swiper"
            >
              {slides.map((p) => (
                <SwiperSlide key={p.id}>
                  <div className="projects-card">
                    <div className="projects-media">
                      <img src={p.image} alt={p.title} />
                      <div className="projects-media-overlay" />
                      <div className="projects-badge">
                        <span>{p.subtitle}</span>
                      </div>
                    </div>

                    <div className="projects-content">
                      <div className="d-flex flex-column gspace-2">
                        <h3 className="projects-title">{p.title}</h3>
                        <p className="projects-desc">{p.description}</p>

                        <div className="projects-tags">
                          {p.tags.map((t, idx) => (
                            <span
                              className="projects-tag"
                              key={`${p.id}-${idx}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="d-flex align-items-center flex-row gspace-2 link-wrapper">
                          <Link to="/contact" className="projects-link">
                            Discuss a Similar Project
                          </Link>
                          <div className="small-icon-circle">
                            <i className="fa-solid fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>

                      <div className="projects-controls">
                        <button
                          className="projects-nav projects-nav-prev"
                          aria-label="Previous project"
                        >
                          <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                          className="projects-nav projects-nav-next"
                          aria-label="Next project"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
