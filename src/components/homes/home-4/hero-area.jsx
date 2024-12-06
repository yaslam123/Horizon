import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useCharAnimation from "@/hooks/useCharAnimation";

import hero_shape from "../../../../public/assets/img/hero/hero-shape-4-1.png";
import hero_img from "../../../../public/assets/img/hero/hero-4-3.png";

const hero_content = {
  title: (
    <>
      <span>
        <span className="child">Shaping The </span>
      </span>{" "}
      <span>
        <span className="child">Future Real-State in</span>
      </span>{" "}
      <span>
        <span className="child">East Africa.</span>
      </span>
    </>
  ),
  sub_title: "Transforming Real Estate Development in East Africa.",
  //  title: "A1-Driven Cyber Security Solutions",
};
const { title, sub_title } = hero_content;

const HeroArea = () => {
  useCharAnimation(".tp-hero-title-4 span.child");

  return (
    <>
      <div className="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-120 p-relative">
        <div
          className="tp-hero-4-shape-img  wow tpfadeLeft"
          data-wow-duration=".9s"
          data-wow-delay=".5s"
        >
          <Image src={hero_shape} alt="theme-pure" />
        </div>
        <div className="tp-hero-glob-img">
          <Image src={hero_img} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-4-section-box pt-10 z-index-3">
                <h5
                  className="tp-section-subtitle-41 tp-char-animation wow tpfadeRight"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  {sub_title}
                </h5>

                <h3 className="tp-hero-title-4 pb-35 tp-char-animation">
                  {title}
                </h3>

                <Link
                  className="tp-btn-yellow-border wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                  href="/contact"
                >
                  <span>
                    Start Your Real Estate Journey with Us
                    <i className="far fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="tp-hero-4-img-wrapper p-relative">
                <div className="tp-hero-4-main-img text-center z-index-3">
                  {/* <Image src={hero_4_img_1} alt="theme-pure" /> */}
                </div>
                <div className="tp-hero-4-sub-img z-index-3">
                  {/* <Image src={hero_4_img_2} alt="theme-pure" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
