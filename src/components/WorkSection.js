import React from "react";
import vistadashLogoImage from "../images/VistaDashLogo_New_WEB.png";
import ecuacodigoLogoImage from "../images/ecua.jpg";

const WorkSection = () => {
  const works = [
    {
      id: 0,
      business: "Vistadash",
      rol: "Software Engineer",
      date: "February 2016 - present",
      description:
        "Software Engineer on the Vistadash Support (Integration, Solve cases) team.",
      logo: vistadashLogoImage,
    },
    {
      id: 1,
      business: "Ecuacodigo",
      rol: "Software Engineer",
      date: "January 2012 - 2016",
      description:
        "Software Engineer on the Ecucodigo S.A (Web developer, Consulting).",
      logo: ecuacodigoLogoImage,
    },
  ];
  return (
    <section
      id="work_section"
      className="work-section bg-secondary-section pt-5 pb-5"
    >
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-lg-12 mx-auto">
            <h2 className="text-white featured-text">
              Selected Work Experience
            </h2>
            <br />
            <p className="text-white-50">
              Please see my <a href="https://github.com/juanovni/">LinkedIn </a>
              for the complete list of my past work experiences.
            </p>
          </div>
        </div>
        {works.map((work) => {
          return (
            <div
              key={work.id}
              className="row justify-content-center no-gutters bg-black mb-5 mb-lg-0"
            >
              <div className="col-lg-2 text-center">
                <img
                  className="circularlogo"
                  src={work.logo}
                  alt="googlelogo.jpg"
                  height="200"
                />
              </div>
              <div className="col-lg-10">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <div className="workpadding">
                        <h4 className="text-white">{work.business}</h4>
                        <h4 className="text-white">{work.rol}</h4>
                        <p className="text-white">{work.date}</p>
                        <ul className="mb-0 text-white-50">
                          <li>{work.description}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
