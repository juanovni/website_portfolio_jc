import React from "react";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import "../components/styles/Social.scss";

const Socials = () => {
  const icons = [
    {
      id: 0,
      url: "mailto:constantinemurillo@gmail.com",
      name: "Email",
      image: <FaRegEnvelope className="iconbig"></FaRegEnvelope>,
    },
    {
      id: 1,
      url: "https://www.instagram.com/junsc_22/",
      name: "Instagram",
      image: <FaInstagram className="iconbig"></FaInstagram>,
    },
    {
      id: 2,
      url: "https://github.com/juanovni/",
      name: "Github",
      image: <FaGithub className="iconbig"></FaGithub>,
    },
    {
      id: 3,
      url:
        "https://www.linkedin.com/in/juan-jose-constantine-murillo-20b71289/",
      name: "Linkedin",
      image: <FaLinkedin className="iconbig"></FaLinkedin>,
    },
    {
      id: 4,
      url: "https://www.facebook.com/jusnjose/",
      name: "Facebook",
      image: <FaFacebookSquare className="iconbig"></FaFacebookSquare>,
    },
  ];
  return (
    <React.Fragment>
      {icons.map((icon) => {
        return (
          <a key={icon.id} alt="" href={icon.url} className="icon-a-color mx-2">
            {icon.image}
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default Socials;
