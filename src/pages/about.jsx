import React from "react";
import SEO from "../common/seo";
import About from "../components/about";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <About />
    </Wrapper>
  );
};

export default index;
