import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import GuideBannerSection from "../../Components/Banner/guide";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";

function AboutPage(){
    return(
        <>
            <HeadTitle title="About - Cypher - Software Development Studio"/>
            <BannerInnerSection title="About Cypher" currentPage="About Us" />
            <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            <GuideBannerSection />
            <DigitalProcessSection />
        </>
    );
}

export default AboutPage;