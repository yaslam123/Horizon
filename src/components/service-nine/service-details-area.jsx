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

  overview_title: "INFRASTRUCTURE FOR SOCIO-ECONOMIC DEVELOPMENT",
  overview_des: (
    <>
      Infrastructure is the backbone of a well-doing and thriving community to
      foster social and economic growth and development. Infrastructure is a
      crucial enabler of economic growth and development through job creation,
      economic empowerment, poverty reduction/ eradication and physical and
      financial health for citizens. Lack of good and working infrastructure
      leads to economic lag & meltdown. Social infrastructure, including
      housing, roads, railways, airports, Information & Communication
      Technology, energy, water-sewer & Hygiene systems, offer essential social
      services to the community.
    </>
  ),
  overview_list: [
    <>
      Strategy formulation: <br />{" "}
      <span>
        Working with our clients, we identify areas of infrastructure needs and
        craft workable infrastructure development strategies and policy
        guidelines to guide the development implementation.
      </span>
    </>,
    <>
      Institution Strengthening & Project support: <br />{" "}
      <span>
        We offer technical assistance services as a backstopping measure
        before-during and after project implementation to ensure proper project
        implementation and value for money.
      </span>
    </>,
    <>
      Infrastructure Funding:{" "}
      <span>
        We structure Public-Private Partnerships for project funding and
        craft/organise donor funding arrangements designed to support
        infrastructure development.
      </span>
    </>,
    <>
      Urban Infrastructure Development:{" "}
      <span>
        Our approach to urban development planning, implementation & management
        is aligned with creating a conducive environment to live and do business
        with vital urban transport systems, energy systems, water and sanitation
        systems and solid waste management systems.
      </span>
    </>,
    <>
      Rural Infrastructure Development:{" "}
      <span>
        We develop infrastructure master plans with adequate transportation/
        road and communications systems, energy and water and sanitation systems
        and oversee the plan implementation.
      </span>
    </>,
    <>
      Water, Sanitation & Hygiene:{" "}
      <span>
        We conduct needs assessments to establish water and sanitation needs and
        design and develop a water & sanitation master plan to aid
        implementation. We offer technical assistance services to help
        governments and private institutions manage the integration of shared
        water resources and the management of Transboundary basins.
      </span>
    </>,
  ],
};
const {
  category_title,
  categorys,
  bg_img,
  overview_title,
  overview_des,
  overview_list,
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
                  <h4 className="sv-details-title">{overview_title}</h4>
                  <p>{overview_des}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our intervention areas include but are not limited to the
                    following:
                  </h4>
                  <ul>
                    {overview_list.map((item, i) => (
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
