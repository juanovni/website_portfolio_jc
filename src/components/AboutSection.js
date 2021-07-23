import React from "react";
import Pdf from "../Documents/cv_juanConstantine.pdf";

const AboutSection = () => {
  return (
    <section id="aboutme-section" className="bg-primary-section pt-5 pb-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4 text-center">
              Hey there! I'm Juan Constantine, a software engineer at
              <a href="https://vistadash.com/"> Vistadash</a>
            </h2>
            <p className="text-black text-center fz-2">
              Hey there! I'm Juan Constantine, a software engineer at Vistadash.
              I'm working implementation team in Vistadash. I'm interested in
              building web apps, and teaching / tutoring (both coding and
              non-coding things!). Please see my{" "}
              <a href={Pdf} alt="CV Juan Constantine">
                resume
              </a>{" "}
              (or continue scrolling down here) if you want to learn more about
              my past positions.
            </p>
            <p className="text-black text-center fz-2">
              Above all, I am passionate about altruistic causes using
              technology. For example, I served on the exec team of DocConsulta
              Consulting, a club that works with entrepreneur teams to code and
              deliver pro-bono software-driven solutions to local nonprofits.
              This software helped communicate in very difficult times of the
              "Covid-19" pandemic with patients who needed a free consultation
              by video conference without leaving their home.
            </p>
            <p className="text-black text-center fz-2">
              In my free time, I enjoy working out, singing with ukulele ,
              traveling, playing board games
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
