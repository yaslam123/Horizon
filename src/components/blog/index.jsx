import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderFive from "@/layout/headers/header-4";
import React from "react";
import CtaArea from "../contact/cta-area";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";

const Blog = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <BreadcrumbTwo
          title={"Read our blogs"}
          innertitle={"Blog Grid Classic"}
        />
        <BlogGrid />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
