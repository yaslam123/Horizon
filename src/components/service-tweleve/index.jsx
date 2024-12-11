import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import Header from "@/layout/headers/header-4";
import React from "react";
import ServiceDetailsArea from "./service-details-area";

const ServiceDetails = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title_top={"Our Top"}
              title_bottom={"Service Details"}
            />
            <HeroBanner
              title="Our Top"
              subtitle="Service Details"
              bg_img="/assets/img/breadcrumb/12.jpg"
            />
            <ServiceDetailsArea />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
