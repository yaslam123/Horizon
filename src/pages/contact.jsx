import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Horizon Multi-Sector Solutions"} />
      <Contact />
    </Wrapper>
  );
};

export default index;
