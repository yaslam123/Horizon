import React from "react";
import Image from "next/image";

import plan_img_1 from "../../../../public/assets/img/plan/2.jpg";

import img from "../../../../public/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
  img_box: [{ id: 1, img: plan_img_1, cls: "1" }],

  sub_title: "What We Offer",

  title: (
    <>
      Tailored <span>Solutions</span>, Lasting Impact
    </>
  ),
  info: (
    <>
      At Horizon Multisector Solutions, we offer a comprehensive range of
      professional services that cater to the diverse needs of businesses,
      governments, and NGOs across East Africa. From development management to
      strategic consultancy and market research, we provide innovative,
      reliable, and high-quality solutions that drive sustainable growth and
      efficiency.
    </>
  ),
};
const { img_box, sub_title, title, info } = plan_content;

const accordion_data = [
  {
    id: 1,
    question: "Mission",
    answer: (
      <>
        Our mission is to deliver tailored solutions in development management,
        consultancy, and research that empower organizations to navigate
        challenges and seize growth opportunities. We are committed to fostering
        sustainable development through innovative strategies and a
        customer-centric approach.
      </>
    ),
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_expanded: true,
    aria_controls: "collapseOne",
    show: "",
    actice: "",
  },
  {
    id: 2,
    question: "Vision",
    answer: (
      <>
        Our vision is to be the leading partner for organizations across Africa,
        driving positive change and economic growth through high-impact,
        customized solutions. We strive to create lasting value by empowering
        businesses and governments to achieve their strategic goals and
        contribute to regional development.
      </>
    ),
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "show",
    actice: "",
  },
];
const PlanArea = () => {
  return (
    <>
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="tp-plan-area tp-plan-2-space fix"
      >
        <div className="container">
          <div className="row align-items-center">
            {/*  */}

            <div
              className="col-xl-7 col-lg-7  wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-plan-2-img-box p-relative">
                {img_box.map((item, i) => (
                  <div key={i} className={`tp-plan-2-img-${item.cls}`}>
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            {/*  */}

            <div
              className="col-xl-5 col-lg-5 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-plan-section-box">
                <div className="tp-plan-section-icon pb-30">
                  <Image src={img} alt="theme-pure" />
                </div>
                <span className="tp-section-subtitle-5 text-black">
                  {sub_title}
                </span>
                <h3 className="tp-section-title-5 text-black pb-25">
                  {title}{" "}
                </h3>
                <p className="pb-10">{info}</p>
              </div>
              <div className="tp-custom-accordio-2">
                <div className="accordion" id="accordionExample">
                  {accordion_data.map((item, i) => (
                    <div key={i} className="accordion-items">
                      <h2 className="accordion-header" id={item.accordion_id}>
                        <button
                          className={`accordion-buttons ${item.collapsed}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={item.data_bs_target}
                          aria-expanded={item.aria_expanded}
                          aria-controls={item.aria_controls}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.aria_controls}
                        className={`accordion-collapse collapse ${item.show}`}
                        aria-labelledby={item.accordion_id}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanArea;
