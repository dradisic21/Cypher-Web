import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
    return(
        <>
            <HeadTitle title="Error 404 - Cypher - Software Development Studio" />
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;