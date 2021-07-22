import React from "react";
import "../components/styles/Skillset.scss";
import adwordsImage from "../images/skillset/adwords.svg";

import html5Image from "../images/skillset/html-5.svg";
import jQueryImage from "../images/skillset/jquery.png";
import bootstrapImage from "../images/skillset/bootstrap.png";
import sassImage from "../images/skillset/sass.png";
import reactImage from "../images/skillset/react.png";
import phpImage from "../images/skillset/php.svg";
import mysqlImage from "../images/skillset/mysql.svg";

const SkillsetSection = () => {
  const icons = [
    {
      id: 0,
      image: html5Image,
      description: "HTML5",
    },
    {
      id: 14,
      image: jQueryImage,
      description: "JQuery",
    },
    {
      id: 1,
      image: "http://www.xaviro.com/assets/img/skills/js.svg",
      description: "ES6",
    },
    {
      id: 2,
      image: "http://www.xaviro.com/assets/img/skills/typescript.svg",
      description: "TYPESCRIPT",
    },
    {
      id: 3,
      image: bootstrapImage,
      description: "Bootstrap",
    },
    {
      id: 4,
      image: sassImage,
      description: "SASS",
    },
    {
      id: 5,
      image: "http://www.xaviro.com/assets/img/skills/git.svg",
      description: "GIT & GITHUB",
    },
    {
      id: 6,
      image: "http://www.xaviro.com/assets/img/skills/node.svg",
      description: "NODE JS",
    },
    {
      id: 7,
      image: "http://www.xaviro.com/assets/img/skills/npm.svg",
      description: "NPM",
    },
    {
      id: 8,
      image: "http://www.xaviro.com/assets/img/skills/firebase.svg",
      description: "Firebase",
    },
    {
      id: 9,
      image: "http://www.xaviro.com/assets/img/skills/bash.svg",
      description: "Bash",
    },
    {
      id: 10,
      image: reactImage,
      description: "React",
    },
    {
      id: 11,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/laravel-2-1175146.png",
      description: "Laravel",
    },
    {
      id: 12,
      image: adwordsImage,
      description: "Adwords",
    },
    {
      id: 13,
      image: phpImage,
      description: "PHP",
    },
    {
      id: 15,
      image: mysqlImage,
      description: "MySql",
    },
  ];

  return (
    <React.Fragment>
      <section
        id="skillset-section"
        className="skillset_section bg-primary-section pt-5 pb-5"
      >
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col-lg-12 mx-auto">
              <h2 className="text-black featured-text">Skill Set</h2>
              <br />
            </div>
          </div>
          <div className="row">
            {icons.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="col-sm-3 col-xs-4 image-container text-center"
                >
                  <img
                    className="svg-skill"
                    src={icon.image}
                    title={icon.description}
                    alt={icon.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SkillsetSection;
