import React from "react";
import SEO from "../common/seo";
import ServiceTwo from "../components/service-two";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <ServiceTwo />
    </Wrapper>
  );
};

export default index;
