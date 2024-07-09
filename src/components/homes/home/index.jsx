import ScrollToTop from "@/hooks/scroll-to-top";
// import Footer from "@/layout/footers/footer";
import React from "react";
import Header from "@/layout/headers/header-4";
import HeroArea from "@/components/homes/home-4/hero-area";
import OpenAccountArea from "@/components/homes/home-2/open-account-area";
import PaymentMethodArea from "@/components/homes/home-2/payment-method-area";
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
            <OpenAccountArea />
            <PaymentMethodArea />
            <ServiceArea />
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
