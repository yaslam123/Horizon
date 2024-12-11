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

  overview_title1: "CATALYSING ECONOMIC GROWTH",
  overview_des1: (
    <>
      Sub-Saharan Africa is home to over one billion people, half under 25
      years. Economic growth in the region is marginal, with multiple shocks,
      high volatility, and economic uncertainty. The looming threat of
      stagnation amid a landscape of multiple economic shocks calls for African
      policymakers to implement policies that accelerate economic
      transformation, thereby enhancing productivity & growth and creating more
      jobs. We provide long-lasting solutions to emerging economies to catalyze
      sustainable economic growth and development.
    </>
  ),
  overview_des2: (
    <>
      We develop customized, innovative, and sustainable solutions to address
      socio- economic development gaps in Africa.
    </>
  ),
  overview_list: [
    <>
      We design programs that help local enterprises to assess their global
      competitiveness and develop effective marketing and market penetration
      strategies.
    </>,
    <>
      We design programs to support poverty reduction, job creation,
      entrepreneurship, skills development, enterprise formation and expansion,
      investment attraction and economic growth.
    </>,
    <>
      We assist governments and private stakeholders in developing mutually
      beneficial collaborations [Public-Private-Partnerships] that support
      local, national, regional and continental economic development and
      sectoral agendas.
    </>,
    <>
      We craft tailor-made business Support Programs aimed at developing
      sustainable business value chains.
    </>,
  ],
  overview_title2: "Sustainability & Climate Adaptation",
  overview_des3: (
    <>
      Climate change has a profound impact on the growth and sustainability of
      developing economies. It drives global temperature increases, alters
      rainfall patterns, and leads to more frequent and intense floods and
      droughts worldwide.
    </>
  ),
  overview_des4: (
    <>
      The consequences of climate change amplify the challenges of population
      growth, poverty, and rapid urbanization. Without effective adaptation
      measures, climate change risks pushing millions into poverty and
      significantly reducing opportunities for sustainable development. In the
      least developed countries, focused efforts on land use, agricultural
      practices, and sustainable development are critical to mitigating these
      effects
    </>
  ),
  overview_des5: (
    <>
      We design comprehensive strategies and solutions aimed at both preventing
      and addressing these challenges. This includes enhancing the capacity for
      modern, climate- resilient agricultural practices, supporting
      environmental conservation programs, establishing robust climate
      infrastructure, introducing technologies for clean energy access,
      promoting sustainable land-use practices, and facilitating climate
      finance.
    </>
  ),
};
const {
  category_title,
  categorys,
  bg_img,
  overview_title1,
  overview_title2,
  overview_des1,
  overview_des2,
  overview_des3,
  overview_des4,
  overview_des5,
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
                  <h4 className="sv-details-title">{overview_title2}</h4>
                  <p>{overview_des3}</p>
                  <p>{overview_des4}</p>
                  <p>{overview_des5}</p>
                </div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title1}</h4>
                  <p>{overview_des1}</p>
                  <p className="text-grey fw-bold">{overview_des2}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our intervention areas include:
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
