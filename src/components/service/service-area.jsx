import service_data from "@/data/service-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import service_icon_1 from "../../../public/assets/img/service/sv-icon-3-1.png";
import service_icon_2 from "../../../public/assets/img/service/service-shape-3-1.png";

// icons
import ServiceIconOne from "../../svg/service/service-icon-1";
import ServiceIconTwo from "../../svg/service/service-icon-2";
import ServiceIconThree from "../../svg/service/service-icon-3";
import ServiceIconFoure from "../../svg/service/service-icon-4";
import ServiceIconFive from "../../svg/service/service-icon-5";
import ServiceIconsix from "../../svg/service/service-icon-6";
import ServiceIconSeven from "../../svg/service/service-icon-7";

const service_content = {
  title: (
    <>
      Tailored Solutions for Every Sector, <br />
      Every Challenge.
    </>
  ),
  btn_text: <>Explore All Services</>,

  bg_img: "/assets/img/service/service-3-bg.png",
  service_title: "Introduction to Services",
  service_info: (
    <>
      Comprehensive Solutions for Growth,
      <br /> Innovation, and Sustainable Impact{" "}
    </>
  ),
};
const { title, btn_text, bg_img, service_title, service_info } =
  service_content;

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-area pb-120 z-index">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                <h3 className="tp-section-title tp-title-anim">{title}</h3>
                <Link
                  className="tp-btn-inner tp-btn-hover alt-color-black wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  href="/service"
                >
                  <span>{btn_text}</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-8 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className="tp-service-3-item mb-30 p-relative z-index"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="tp-service-3-icon">
                  <Image src={service_icon_1} alt="theme-pure" />
                </div>
                <div className="tp-service-3-content">
                  <span>{service_title}</span>
                  <h4 className="tp-service-3-title-sm">
                    <Link href="/#">{service_info}</Link>
                  </h4>
                </div>
                <div className="tp-service-3-btn">
                  <Link className="tp-btn-white-solid" href="/#">
                    Learn More
                  </Link>
                </div>
                <div className="tp-service-3-shape">
                  <Image src={service_icon_2} alt="theme-pure" />
                </div>
              </div>
            </div>

            {/* service One */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconOne />
                </div>
                <div className="tp-service-sm-content">
                  <span>Governance Strengthening</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-one">
                      Transforming Governance Systems <br /> or Efficiency and
                      Accountability.
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-one">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Two */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconTwo />
                </div>
                <div className="tp-service-sm-content">
                  <span>Public Sector Review</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-two">
                      Enhancing Public Sector Efficiency through Comprehensive
                      Reforms.
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-two">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service three */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconThree />
                </div>
                <div className="tp-service-sm-content">
                  <span>Project Management Services</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-three">
                      Guiding Your Projects from Inception to Successful
                      Completion.
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-three">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service four */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconFoure />
                </div>
                <div className="tp-service-sm-content">
                  <span>Research Services</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-four">
                      Providing Data-Driven Insights for Strategic Decision
                      Making
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-four">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service five */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconFive />
                </div>
                <div className="tp-service-sm-content">
                  <span>Corporate Finance</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-five">
                      Maximizing Financial Performance and Operational
                      Efficiency
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-five">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service eight */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconTwo />
                </div>
                <div className="tp-service-sm-content">
                  <span>P&O and Strategic Resilience</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-eight">
                      Enhancing Workforce Excellence and Agility.
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-eight">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service six */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconsix />
                </div>
                <div className="tp-service-sm-content">
                  <span>Digital Transformation</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-six">
                      Driving Growth with Digital Innovation and ICT Solutions
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-six">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service seven */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconSeven />
                </div>
                <div className="tp-service-sm-content">
                  <span>Sustainability & Climate Adaptation</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-seven">
                      Mitigating Climate Risks and Promoting Sustainable
                      Development
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-seven">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service nine */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconFoure />
                </div>
                <div className="tp-service-sm-content">
                  <span>INFRASTRUCTURE for SED</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-nine">
                      Building Sustainable Foundations for Growth, Innovation,
                      and Community Well-being
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-nine">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service ten */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconFive />
                </div>
                <div className="tp-service-sm-content">
                  <span>EDUCATION SYSTEMS STRENGTHENING</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-ten">
                      Reforms and advancements in the education sector
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-ten">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service eleven */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconsix />
                </div>
                <div className="tp-service-sm-content">
                  <span>ONE HEALTH SYSTEM</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-eleven">
                      One Health: Integrating Human, Animal, and Environmental
                      Health for a Sustainable Future
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-eleven">
                      Learn More <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* service 12 */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                <div className="tp-service-sm-icon">
                  <ServiceIconThree />
                </div>
                <div className="tp-service-sm-content">
                  <span>AUDIT & ASSURANCE</span>
                  <h3 className="tp-service-sm-title">
                    <Link href="/service-12">
                      Ensuring Compliance, Transparency, and Accountability
                      through Rigorous Audits
                    </Link>
                  </h3>
                  <div className="tp-service-sm-link">
                    <Link href="/service-12">
                      Learn More <i className="far fa-arrow-right"></i>
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

export default ServiceArea;
