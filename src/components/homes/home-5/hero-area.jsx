import LineShapTwo from "@/svg/line-shap-2";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

// import shape images
import shape_1 from "../../../../public/assets/img/hero/hero-circle-5-1.png";
import shape_2 from "../../../../public/assets/img/hero/hero-circle-5-2.png";
import shape_3 from "../../../../public/assets/img/hero/hero-circle-5-3.png";
import shape_4 from "../../../../public/assets/img/hero/2.jpg";

const HeroArea = () => {
  useEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    tl.to(".hero-text-anim-2 i.child-2", {
      y: "0px",
      duration: 0.9,
      opacity: 1,
      stagger: 0.3,
      delay: 0.3,
    });
  });

  return (
    <>
      <div className="tp-hero-area tp-hero-five__ptb-5 p-relative grey-bg-2 fix">
        <div className="tp-hero-five__shape-2">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="tp-hero-five__shape-3">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="tp-hero-five__shape-4">
          <Image src={shape_3} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-2">
              <div className="tp-hero-five-section-wrap">
                <div className="tp-hero-five-section-box z-index">
                  <h3 className="tp-hero-title-5 hero-text-anim-2">
                    <i>
                      <i className="child-2">
                        Delivering <br />
                      </i>
                    </i>
                    <i>
                      <i className="child-2">
                        Innovative{" "}
                        <span className="child-1 p-relative">
                          Solutions
                          <LineShapTwo />
                        </span>
                        <br />
                      </i>
                    </i>
                    <i>
                      <i className="child-2">
                        For <span className="child-2">Sustainable</span> <br />
                      </i>
                    </i>
                    <i>
                      <i className="child-2">Growth</i>
                    </i>
                  </h3>
                  <p
                    className="wow tpfadeUp pr-60"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    HORIZON MULTISECTOR SOLUTIONS IS A PROFESSIONAL SERVICES
                    FIRM SPECIALIZING IN DEVELOPMENT MANAGEMENT, MANAGEMENT
                    CONSULTANCY, RESEARCH, ADVISORY, AND SECTOR-SPECIFIC
                    SOLUTIONS FOR PUBLIC, PRIVATE, AND NON- GOVERNMENTAL
                    ORGANIZATIONS (NGOS).
                  </p>
                </div>
                <div
                  className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <Link
                    className="tp-btn-yellow-border  tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                    href="/contact"
                  >
                    <span>
                      Start Your Journey with Us
                      <i className="far fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero-five-2-thumb-main p-relative">
          <div className="tp-hero-five-2-thumb">
            <Image
              src={shape_4}
              className="tp-hero-five-2-thumb-inner"
              alt="theme-pure"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
