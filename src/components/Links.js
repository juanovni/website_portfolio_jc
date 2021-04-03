import React from "react";
import "../components/styles/Links.scss";
import Socials from "../components/Socials";
import ViewPortfolio from "../components/ViewPortfolio";
import ViewResume from "../components/ViewResume";

const Links = () => {
  return (
    <React.Fragment>
      <ViewPortfolio />
      <ViewResume />
      <Socials />
    </React.Fragment>
  );
};

export default Links;
