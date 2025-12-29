import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSection from "../../Components/Services/service";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import CoreService from "../../Components/CoreService/CoreService";
import PartnershipSection from "../../Components/Partnership/Partnership";
import NewsletterSection from "../../Components/Form/Newsletter";

function HomePage(){
    return(
        <>
            <HeadTitle title="Home - Cypher - Software Development Studio" />
            <BannerHomeSection />
            <ExpertiseSection />
            <PartnershipSection />
            <ChooseUsSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <ServiceSection />
            <CaseStudiesSection noPadding={true} />
            <DigitalProcessSection />
            <CoreService />
            <NewsletterSection />
        </>
    );
}

export default HomePage;