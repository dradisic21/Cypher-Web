import React from "react";

const MapsSection = () => {
  return (
    <div className="section pt-0">
      <div className="hero-container">
        <iframe
          loading="lazy"
          className="maps overflow-hidden"
          src="https://www.google.com/maps?q=Osijek%2C+Croatia&output=embed"
          title="Osijek, Croatia"
          aria-label="Osijek, Croatia"
        ></iframe>
      </div>
    </div>
  );
};

export default MapsSection;
