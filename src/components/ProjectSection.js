import React from "react";
import LeftProject from "../components/LeftProject";
import RightProject from "../components/RightProject";
import "../components/styles/Project.scss";
//IMAGES
import lchmImage from "../images/projects/lchm.PNG";
import docconsultaImage from "../images/projects/DocConsulta.png";

const ProjectSection = () => {
  const projects = [
    {
      id: 0,
      image: lchmImage,
      title: "LCHM",
      descripction:
        "An informative web page where the administrator and teachers can create activities according to their role.",
      access_to_link: "http://www.unidadeducativaluischiribogamanrique.edu.ec/",
      div: "left",
    },
    {
      id: 1,
      image: docconsultaImage,
      title: "Doc Consulta",
      descripction:
        "A web application that helps people to video conference with specialized doctors through scheduled appointments.",
      access_to_link: "https://www.doc-consulta.com/login",
      div: "right",
    },
  ];

  return (
    <section
      id="projects_section"
      className="projects-section bg-primary-section pt-5 pb-5"
    >
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-lg-12 mx-auto">
            <h2 className="text-black featured-text ">Projects</h2>
            <br />
            <p className="text-black-50">
              Below are some of the projects I've worked on for fun :).
            </p>
          </div>
        </div>
        {projects.map((project) => {
          if (project.div === "left")
            return <LeftProject key={project.id} {...project} />;

          if (project.div === "right")
            return <RightProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
