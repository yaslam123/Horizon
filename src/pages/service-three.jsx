import React from "react";
import SEO from "../common/seo";
import ServiceThree from "../components/service-three";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <ServiceThree />
    </Wrapper>
  );
};

export default index;
