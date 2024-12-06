import EmailThree from "@/svg/email-3";
import LocationTwo from "@/svg/location-2";
import PhoneThree from "@/svg/phone-3";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import contact_img from "../../../../public/assets/img/hero/hero-4-3.png";
import shape_1 from "../../../../public/assets/img/contact/shape-4-1.png";
import NiceSelect from "@/ui/nice-select";

const contact_content = {
  sub_title: "CONTACT US",
  title: "Request Free Consultancy",
  phone: "+252 614303031",
  email: "info@horizonms.org",
  location: <>Amira roud, Sobe Km5, Mogadishu-Somalia</>,
};
const { sub_title, title, phone, email, location } = contact_content;

const ContactArea = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <div className="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
        <div className="tp-contact-glob-img">
          <Image src={contact_img} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-12 z-index-3 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-contact-section-box pb-25">
                <h5 className="tp-section-subtitle-41 pb-10 ">{sub_title}</h5>
                <h3
                  className="tp-section-title-4"
                  style={{
                    color: "white",
                  }}
                >
                  {title}
                </h3>
              </div>
              <div className="tp-contact-info-box tp-title-anim">
                <ul>
                  <li>
                    <PhoneThree />
                    <Link href={`tel:${phone}`}>{phone}</Link>
                  </li>
                  <li>
                    <EmailThree />
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </li>
                  <li>
                    <LocationTwo />
                    <Link
                      href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                      target="_blank"
                    >
                      {location}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-7 col-12 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-contact-input-wrapper p-relative">
                <div className="tp-contact-shape">
                  <Image src={shape_1} alt="theme-pure" />
                </div>
                <form action="https://formspree.io/f/xwpkzjad" method="POST">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="tp-contact-input mb-20">
                        <input
                          type="text"
                          name="Name"
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="tp-contact-input mb-20">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="tp-contact-input mb-20">
                        <textarea
                          name="Message"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tp-contact-btn">
                        <button
                          type="submit"
                          className="tp-btn-yellow-lg yellow-bg w-100"
                        >
                          Get a free consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
