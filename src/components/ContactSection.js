import React from "react";
import Socials from "../components/Socials";
import "../components/styles/Contact.scss";
import {
  FaPaperPlane,
  FaRegEnvelope,
  FaUserFriends,
  FaMobileAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact_section"
      className="contact-section bg-secondary-section pt-5 pb-5 mb-5"
    >
      <div className="container mt-5">
        <div className="col-md-10 col-lg-8 mx-auto text-center">
          <FaPaperPlane
            className="fa-2x mb-2 text-white"
            style={{ fontSize: "2rem" }}
          ></FaPaperPlane>
          <h2 className="text-white mb-5">Connect with me!</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <FaRegEnvelope className="mb-2 cl-primary"></FaRegEnvelope>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="mailto:constantinemurillo@gmail.com">
                    constantinemurillo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <FaUserFriends className="mb-2 cl-primary"></FaUserFriends>
                <h4 className="text-uppercase m-0">Socials</h4>
                <hr className="my-4" />
                <div className="social">
                  <Socials />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <FaMobileAlt className="mb-2 cl-primary"></FaMobileAlt>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+ (593) 9 859-25100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default ContactSection;
