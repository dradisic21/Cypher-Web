import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import CoreService from "../../Components/CoreService/CoreService";
import HeadTitle from "../../Components/Head/HeadTitle";

function ServicePage(){
    return(
        <>
            <HeadTitle title="Services - Cypher - Software Development Studio" />
            <BannerInnerSection title="Our Services" currentPage="Services" />
            <ServiceSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <CoreService />
        </>
    );
}

export default ServicePage;