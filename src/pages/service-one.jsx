import React from "react";
import SEO from "../common/seo";
import ServiceOne from "../components/service-one";
import ServiceTwo from "../components/service-two";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <ServiceOne />
    </Wrapper>
  );
};

export default index;
