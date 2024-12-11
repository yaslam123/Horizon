import React from "react";
import SEO from "../common/seo";
import Servicefour from "../components/service-four";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <Servicefour />
    </Wrapper>
  );
};

export default index;
