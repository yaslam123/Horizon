import React from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <form
        action="https://formspree.io/f/xwpkzjad"
        method="POST"
        className="box"
      >
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="text"
                name="FullNmae"
                className="inputText"
                required
              />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" name="email" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" name="number" className="inputText" />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                name="message"
                className="textareaText"
                required
              ></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button type="submit" className="submit-btn w-100">
                Send your Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
