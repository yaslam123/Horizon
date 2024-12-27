import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "ABOUT THE COMPANY",
  title: (
    <>
      Horizon Multi-Sector Solutions Firm <br /> is Made For The People.
    </>
  ),
  info_1: (
    <>
      Horizon Multisector Solutions is a professional services firm founded in
      2024, based in Mogadishu, Somalia. We specialize in development
      management, consultancy, research, and sector-specific solutions,
      providing tailored services to businesses, governments, and NGOs across
      East Africa. Our aim is to help organizations navigate complex challenges
      and seize opportunities for sustainable growth.
    </>
  ),
  info_2: (
    <>
      Our vision is to be a trusted partner for organizations seeking to drive
      positive change and growth. We are committed to fostering innovation and
      resilience, empowering our clients to achieve long-term success in a
      rapidly evolving global market.
    </>
  ),
  info_3: (
    <>
      At Horizon, we pride ourselves on our commitment to integrity, excellence,
      and customer satisfaction. We deliver customized, high-impact solutions
      that not only meet but exceed the expectations of our clients, making us a
      trusted partner in your journey toward sustainable success and
      development.
    </>
  ),
};
const { sub_title, title, info_1, info_2, info_3 } = company_content;

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="ab-company-area pt-105 pb-100">
        <div className="container">
          <div className="row ab-company-section-space">
            <div className="col-xl-6">
              <div className="ab-company-section-box">
                <h4 className="inner-section-subtitle">{sub_title}</h4>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="ab-company-right">
                <div className="ab-company-section-text">
                  <p className="pb-10">{info_1}</p>{" "}
                  <p className="pb-10">{info_3}</p>
                  <p className="pb-10">{info_2}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>USED BY</span>
                                    <h4>11,000<em>+</em></h4>
                                    <p>Creators</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>VALUE</span>
                                    <h4>46<em>m</em></h4>
                                    <p>Revenue per Year</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>IN</span>
                                    <h4>150<em>+</em></h4>
                                    <p>Countries using</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div> */}
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
    </>
  );
};

export default CompanyArea;
