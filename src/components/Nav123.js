import React from "react";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import "../components/styles/Profile.scss";
import WorkSection from "../components/WorkSection";
import AboutSection from "../components/AboutSection";
import SkillsetSection from "../components/SkillsetSection";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

const Nav123 = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" sticky="top" id="mainNav">
        <Header />
      </Navbar>
      <header id="home-section" className="headerWrapperBG">
        <div className="container align-items-center">
          <div className="col-8 mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase heading-wrapper-text ">
              <p className="line anim-typewriter"> Juan </p>
              <p className="line2 anim-typewriter2"> Constantine</p>
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5 heading-wrapper-legend anotations">
              software engineer | lifelong learner | coffee lover
            </h2>
            <div className="text-center">
              <Link
                to="aboutme-section"
                spy={true}
                smooth={true}
                className="btn btn--4"
              >
                more About me
              </Link>
            </div>
          </div>
        </div>
      </header>
      <AboutSection />
      <WorkSection />
      <SkillsetSection />
      <ProjectSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Nav123;
