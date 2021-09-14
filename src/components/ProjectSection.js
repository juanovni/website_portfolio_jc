import React from "react";
import LeftProject from "../components/LeftProject";
import RightProject from "../components/RightProject";
import "../components/styles/Project.scss";
//IMAGES
import vistadashImage from "../images/projects/Vistadash.png";
import lchmImage from "../images/projects/lchm.PNG";
import docconsultaImage from "../images/projects/DocConsulta.png";
import kreatorImage from "../images/projects/kreator.png";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      image: vistadashImage,
      title: "Vistadash",
      descripction:
        "Vistadash is a comprehensive visual aid and vendor-neutral data warehouse that gives automotive dealerships the ability to consolidate and simplify reporting, as well as measure the quality of their online marketing campaigns based on engagement.",
      access_to_link: "https://vistadash.com/",
      div: "left",
      technologies: [
        {
          id:1,
          name: 'PHP'
        },
        {
          id:2,
          name: 'MySql'
        },
        {
          id:3,
          name: 'API (Adwords, BingAds, Google Analytics)'
        },

      ]
    },
    {
      id: 2,
      image: lchmImage,
      title: "LCHM",
      descripction:
        "An informative web page where the administrator and teachers can create activities according to their role.",
      access_to_link: "http://www.unidadeducativaluischiribogamanrique.edu.ec/",
      div: "right",
      technologies: [
        {
          id:1,
          name: 'PHP'
        },
        {
          id:2,
          name: 'MySql'
        }
      ]
    },
    {
      id: 3,
      image: docconsultaImage,
      title: "Doc Consulta",
      descripction:
        "A web application that helps people to video conference with specialized doctors through scheduled appointments.",
      access_to_link: "https://www.doc-consulta.com/login",
      div: "left",
      technologies: [
        {
          id:1,
          name: 'Backend (Laravel Passport) API'
        },
        {
          id:2,
          name: 'Front (Laravel)'
        },
        {
          id:3,
          name: 'MySql'
        },
        {
          id:4,
          name: 'OpenTok'
        }
      ]
    },
    {
      id: 4,
      image: kreatorImage,
      title: "Bio-IoT",
      descripction:
        "It is a company that provides information on the time of entry and exit of personnel within the organization.",
      access_to_link: "https://kreator.ai/login",
      div: "right",
      technologies: [
        {
          id:1,
          name: 'Backend (Node.js, Graphql) API'
        },
        {
          id:2,
          name: 'Front (React)'
        },
        {
          id:3,
          name: 'Postgresql'
        },
        {
          id:4,
          name: 'NextJS'
        }
      ]
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
              Below are some of the projects I've worked :)
            </p>
          </div>
        </div>
        {projects.map((project) => {
          if (project.div === "left")
            return <LeftProject {...project} />;

          if (project.div === "right")
            return <RightProject {...project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
