import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";

function BlogPage(){
    return(
        <>
            <HeadTitle title="Blog - Cypher - Software Development Studio" />
            <BannerInnerSection title="Our Blog" currentPage="Blog" />
            <BlogSection />            
        </>
    );
}

export default BlogPage;