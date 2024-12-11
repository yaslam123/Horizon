import React from "react";
import SEO from "../common/seo";
import Service from "../components/service-seven";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <Service />
    </Wrapper>
  );
};

export default index;
