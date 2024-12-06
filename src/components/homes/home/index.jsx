import ScrollToTop from "@/hooks/scroll-to-top";
// import Footer from "@/layout/footers/footer";
import React from "react";
import Header from "@/layout/headers/header-5";
import HeroArea from "@/components/homes/home-5/hero-area";
import CtaArea from "@/components/homes/home-5/cta-area";
import BusinessBox from "@/components/homes/home-5/business-box";
import BlogArea from "@/components/homes/home-3/blog-area";
import ServiceArea from "@/components/homes/home-2/service-area";
import ContactArea from "@/components/homes/home-4/contact-area";
import Footer from "@/layout/footers/footer-5";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <CtaArea />
            <ServiceArea />
            <BlogArea />
            <ContactArea />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
