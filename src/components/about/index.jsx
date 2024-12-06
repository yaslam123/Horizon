import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header-4";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import PlanArea from "../homes/home-5/plan-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";

const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb title_top="About" title_bottom="Softec" />
      <HeroBanner
        title="About"
        subtitle="Horizon"
        bg_img="/assets/img/breadcrumb/8.jpg"
      />
      <Brand />
      <CompanyArea />
      <PlanArea />
      <JourneyArea />
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default About;
