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

  overview_title1: "AUDIT & ASSURANCE",
  overview_des1: (
    <>
      In today’s complex regulatory environment, organizations—whether in the
      private, public, or nonprofit sectors—must undergo financial and
      operational audits to ensure compliance with the legal and regulatory
      standards specific to their industry. Audited financial statements and
      reports are indispensable tools for key stakeholders such as governments,
      donors, lenders, shareholders, investors, and regulatory bodies. These
      stakeholders rely on audit reports to provide transparency, credibility,
      and assurance that the financial information presented is accurate and
      reliable. <br /> A thorough audit not only enhances the trustworthiness of
      financial reporting but also provides insights into improving internal
      controls, governance structures, risk management, and overall operational
      efficiency. By addressing both compliance and performance, audits serve as
      a strategic tool for strengthening organizational integrity and promoting
      sustainable growth.
    </>
  ),
  overview_des2: (
    <>
      By partnering with us, organizations can benefit from our deep industry
      expertise, ensuring not only compliance but also long-term value creation
      through enhanced operational performance and strategic decision-making.
    </>
  ),
  overview_list1: [
    <>
      External Audit: <br />{" "}
      <span>
        Independent examination of financial statements to provide an unbiased
        opinion on their accuracy, compliance, and presentation.
      </span>
    </>,
    <>
      Financial Reporting: <br />{" "}
      <span>
        Assistance with the preparation and review of financial statements in
        accordance with applicable accounting standards and regulatory
        requirements.
      </span>
    </>,
    <>
      Governance, Risk & Compliance (GRC):{" "}
      <span>
        Evaluation of governance structures, risk management processes, and
        compliance frameworks to ensure they meet best practices and regulatory
        obligations.
      </span>
    </>,
    <>
      Internal Audit & Risk Assurance:{" "}
      <span>
        Assessment of internal controls, risk management systems, and
        operational effectiveness to identify areas for improvement and mitigate
        risks
      </span>
    </>,
    <>
      Forensic Audit & Assessments:{" "}
      <span>
        Investigative audits aimed at detecting fraud, mismanagement, or
        financial irregularities within the organization.
      </span>
    </>,
    <>
      Value for Money Audits:{" "}
      <span>
        Review of the organization's use of resources to ensure efficiency,
        effectiveness, and economy in achieving its objectives.
      </span>
    </>,
    <>
      Tax Audits:{" "}
      <span>
        Examination of tax filings and obligations to ensure compliance with tax
        laws and identify potential risks or savings opportunities.
      </span>
    </>,
  ],
  overview_title2: "RISK ADVISORY",
  overview_des3: (
    <>
      While organizations do their business, the risk land-scape surrounding
      them constantly evolves, with new threats emerging daily. With a complete
      understanding of our client’s business context and risk landscape, we
      apply our innovative technical expertise in risk management to help
      organizations go beyond not just managing risk but also enhancing their
      resilience.
    </>
  ),
  overview_list2: [
    <>Accounting & Internal Controls,</>,
    <>Regulatory & Legal,</>,
    <>Cyber & Strategic Risk,</>,
    <>Regulatory & Legal,</>,
    <>Sustainability & Climate.</>,
  ],
  overview_title3: "LEGAL ADVISORY",
  overview_des4: (
    <>
      The growing complexity in the business world, changing business norms, and
      unhealthy competition among businesses have brought myriad challenges
      touching on legal compliance to thriving companies. Our legal advisory
      solutions help our clients to remain competitive and compliant in the
      current market situation. We address all aspects of your business and
      resolve them effectively.
    </>
  ),
  overview_list3: [
    <>Legal Advisory Services,</>,
    <>Legal Management Consulting,</>,
    <>Legal Managed Services,</>,
    <>Legal Transaction advisory services.</>,
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
  overview_list1,
  overview_list2,
  overview_list3,
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
                  <p className=" text-black fw-bold">{overview_des2}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our comprehensive Audit and Assurance services are designed
                    to meet the diverse needs of our clients and include the
                    following specialized areas:
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
                {/*  */}
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title2}</h4>
                  <p>{overview_des3}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our comprehensive Audit and Assurance services are designed
                    to meet the diverse needs of our clients and include the
                    following specialized areas:
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
                {/*  */}
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">{overview_title3}</h4>
                  <p>{overview_des4}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Our comprehensive Audit and Assurance services are designed
                    to meet the diverse needs of our clients and include the
                    following specialized areas:
                  </h4>
                  <ul>
                    {overview_list3.map((item, i) => (
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
