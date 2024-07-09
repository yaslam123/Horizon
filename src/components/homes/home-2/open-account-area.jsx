import Link from "next/link";
import Image from "next/image";
import React from "react";

import account_img_1 from "../../../../public/assets/img/account/account-bg.png";
import account_img_2 from "../../../../public/assets/img/account/acc-main.png";
import account_img_3 from "../../../../public/assets/img/account/ac-author.png";
import account_img_4 from "../../../../public/assets/img/account/ac-shape-1.png";
import account_img_5 from "../../../../public/assets/img/account/ac-shape-2.png";

const account_content = {
  account_shape: [
    {
      id: 1,
      cls: "bg",
      img: account_img_1,
    },
    {
      id: 2,
      cls: "main-img",
      img: account_img_2,
    },
    {
      id: 3,
      cls: "author",
      img: account_img_3,
    },
    {
      id: 4,
      cls: "shape-1",
      img: account_img_4,
    },
    {
      id: 5,
      cls: "shape-2",
      img: account_img_5,
    },
  ],
  // sub_title: "Open An Account",
  // title: "Who We Are",
  // account_step: [
  //   {
  //     id: 1,
  //     number: "01",
  //     info: <>Sign up in a few minutes</>,
  //   },
  //   {
  //     id: 2,
  //     number: "02",
  //     info: <>Let us verify your identity</>,
  //   },
  //   {
  //     id: 3,
  //     number: "03",
  //     info: (
  //       <>
  //         Your account is open; you can send <br /> your first payment
  //       </>
  //     ),
  //   },
  // ],
  // btn_text: "Open An Account in Minutes",
  // info: "Try it for 30 days. For free. No obligations.",
};
const about_content = {
  sub_title: "Who We Are",
  title: "Confidence in Your Financial Solutions",
  des: (
    <>
      Empowering businesses with fast, secure, and innovative financial services
      tailored to emerging markets. Our solutions ensure seamless cross-border
      operations, bridging the gap between local and global financial systems
      with advanced technology.
    </>
  ),
  feature_1: (
    <>Revolutionizing financial transactions with cutting-edge technology</>
  ),
  feature_2: <>Offering fast, affordable, and reliable solutions</>,
  feature_3: <>Ensuring seamless cross-border operations.</>,

  btn_text: "About Us",
};
const { account_shape } = account_content;
const { des, sub_title, title, feature_1, feature_2, feature_3, btn_text } =
  about_content;

const OpenAccountArea = () => {
  return (
    <>
      <div className="tp-account-area pt-165 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div
                className="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                {account_shape.map((item, i) => (
                  <div key={i} className={`tp-account-${item.cls}`}>
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-security-section-wrapper">
                <div className="tp-security-section-box mb-45">
                  <h5
                    className="tp-section-subtitle-4 pb-10"
                    style={{ color: "black" }}
                  >
                    {sub_title}
                  </h5>
                  <h3 className="tp-section-title-4 pb-25">{title}</h3>
                  <p>{des}</p>
                </div>
                <div className="tp-security-feature">
                  <ul>
                    <li>
                      <i className="far fa-check"></i>
                      {feature_1}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      {feature_2}
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      {feature_3}
                    </li>
                  </ul>
                </div>
                <div className="tp-security-btn">
                  {/* <Link
                    className="tp-btn-yellow-border2"
                    href="/about"
                    style={{ color: "black" }}
                  >
                    {btn_text}
                    <i className="far fa-angle-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAccountArea;
