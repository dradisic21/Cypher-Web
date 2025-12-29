import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import CoreService from "../../Components/CoreService/CoreService";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../../Components/ChooseUs/choose";

function PricingPage(){
    return(
        <>
            <HeadTitle title="Pricing Plan - Cypher - Software Development Studio" />
            <BannerInnerSection title="Pricing Plan" currentPage="Pricing Plan" />
            <CoreService />
            <DigitalProcessSection />
            <ChooseUsSection />
        </>
    );
}

export default PricingPage;