import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";

function CaseStudiesPage(){
    return(
        <>
            <HeadTitle title="Case Studies - Cypher - Software Development Studio" />
            <BannerInnerSection title="Case Studies" currentPage="Case Studies"/>
            <CaseStudiesSection />
            <GuideBannerSection />
            <div className="pb-5 mb-5">
                <ModalVideoSection />
            </div>
        </>
    );
}

export default CaseStudiesPage;