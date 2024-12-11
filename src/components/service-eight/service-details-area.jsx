import React from "react";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import Image from "next/image";
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";

const service_details_content = {
  category_title: "Service Category",
  categorys: [
    { id: 1, category: "Governance and Public Sector", cls: "" },
    { id: 2, category: "Project Management and Research", cls: "" },
    { id: 3, category: "Financial and Operational Services", cls: "" },
    { id: 4, category: "Business Growth and Performance", cls: "" },
    { id: 5, category: "Strategic and Compliance Services", cls: "" },
    { id: 6, category: "Technology and Digital Transformation", cls: "" },
    { id: 7, category: "Economic Development and Sustainability", cls: "" },
    { id: 8, category: "Infrastructure Development", cls: "" },
    { id: 9, category: "Education and Health", cls: "" },
    { id: 10, category: "Audit and Legal", cls: "" },
  ],
  bg_img: "/assets/img/service/sv-bg.jpg",

  overview_title1: "People & Organizational Perfomance",
  overview_des1: (
    <>
      Organizational performance is a factor for the people who drive it. An
      organization run by a well-experienced and motivated team will always
      record excellent performance, and vice versa is true. Developing well
      established human capital is imperative to ensure the organization’s good
      performance, customer satisfaction and continuous improvement of the
      organization’s offerings.
    </>
  ),
  overview_list1: [
    <>Capacity Needs Assessment</>,
    <>Job Evaluation and Analysis</>,
    <>Training Needs Assessment & Analysis</>,
    <>Training & Capacity Building Programs</>,
    <>Performance Management Systems setting</>,
    <>Performance Appraisal& Evaluation</>,
    <>Change management and experience</>,
    <>HR transformation</>,
    <>Integrated workforce mobility</>,
    <>Learning and development consulting</>,
  ],

  overview_title2: "Strategy, Compliance & Resilience",
  overview_des2: (
    <>
      As organizations navigate through harsh economic tides and disruptions, it
      is always essential to sit and look back, rethink and re-strategies the
      next strategic move to remain resilient and relevant in the market
    </>
  ),
  overview_des3: (
    <>
      Our solutions enable organizations to stand the test of time as they
      thrive in dynamic markets. We walk with our clients to ensure the
      successful implementation of Strategic plans as they achieve the targeted
      results in full compliance with the legal, regulatory and operation- al
      framework.
    </>
  ),
  overview_des4: (
    <>
      Compliance with the established legal, regulatory and operational
      framework and requirements is an area that has yet to be noticed by many
      organizations. We support organizations in defining their ambitions and
      developing innovative customer- centric strategies focused on achieving
      operational efficiency & excellence leading to growth.
    </>
  ),
  overview_list2: [
    <>Strategic Plan Development & Review</>,
    <>Branding & Strategic Communication</>,
    <>Corporate Transformation, Reform & Rebranding</>,
    <>Business Processes Design, Outsourcing & Re- engineering</>,
    <>ISO Standard Implementation & Audits</>,
    <>Strategic Risk Management</>,
    <>Diagnostic Reviews & Analysis</>,
    <>Risk Audit & Assessments</>,
    <>Compliance Audits</>,
    <>Sustainability & Business Resilience</>,
  ],
};
const {
  category_title,
  categorys,
  bg_img,
  overview_title1,
  overview_title2,
  overview_title3,
  overview_des1,
  overview_des2,
  overview_des3,
  overview_des4,
  overview_des5,
  overview_des6,
  overview_list1,
  overview_list2,
  challange_titel,
  challange_des,
} = service_details_content;

const ServiceDetailsArea = () => {
  // useIsomorphicLayoutEffect(() => {
  //    ScrollTrigger.create({
  //       trigger: ".sv-details-widget",
  //       start: "top 5%",
  //       end: "bottom 70%",
  //       pin: ".sv-details-widget",
  //       pinSpacing: false
  //      });
  // },[])

  return (
    <>
      <div className="sv-details-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="sv-details-wrapper">
                <div className="sv-details-thumb mb-45"></div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title1}</h4>
                  <p>{overview_des1}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our intervention areas include:
                  </h4>
                  <ul>
                    {overview_list1.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sv-details-title-box mb-55 mt-55">
                  <h4 className="sv-details-title">{overview_title2}</h4>
                  <p>{overview_des2}</p>
                  <p>{overview_des3}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our intervention areas include:
                  </h4>
                  <ul>
                    {overview_list2.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tp-faq-area pt-50">
                  <div className="container p-0">
                    <div className="row g-0">
                      <div className="col-xl-12">
                        <h4 className="sv-details-title">
                          Any Questions find here.
                        </h4>
                        <AnswerQuestion style={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="sv-details-widget">
                <div className="sv-details-category mb-30">
                  <div className="sv-details-category-title">
                    <h4 className="sv-details-title-sm">{category_title}</h4>
                  </div>
                  <div className="sv-details-category-list">
                    <ul>
                      {categorys.map((item, i) => (
                        <li key={i} className={item.cls}>
                          <Link href="/service">
                            <span>{item.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* <div
                  className="tp-service__dashboard mb-30"
                  style={{ backgroundImage: `url(${bg_img})` }}
                >
                  <div className="tp-service__top-content">
                    <h3 className="tp-service__title-white">
                      Data Analysis <br /> Tools & Methods
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text <br /> of the printing
                    </p>
                    <Link
                      className="tp-btn-orange tp-btn-hover alt-color-white"
                      href="#"
                    >
                      <span>Work with Us</span>
                      <b></b>
                    </Link>
                  </div>
                  <div className="tp-service__dashdboard-sm-img">
                    <Image
                      src={dashbord}
                      className="wow tpfadeRight"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                      alt="theme-pure"
                    />
                  </div>
                </div> */}

                <div className="sv-details-social-box mb-30">
                  <h4 className="sv-details-title-sm">Share it.</h4>
                  <div className="sv-details-social-link">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
