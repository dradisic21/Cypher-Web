import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ProjectsSection from "../../Components/Projects/ProjectsSection"
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";

function WorksPage() {
  return (
    <>
      <HeadTitle title="Works - Cypher - Software Development Studio" />
      <BannerInnerSection title="Our Works" currentPage="Works" />
      <ProjectsSection />
      <ChooseUsAboutSection />

      <PartnershipSection />

      <div className="py-5 my-5">
        <DigitalProcessSection />
      </div>
    </>
  );
}

export default WorksPage;
