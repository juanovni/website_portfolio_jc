import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const ViewPortfolio = () => (
  <Link to="/portfolio">
    <div className="text-center">
      <button className="btn btn--4">
        <FaGlobe className="mr-2 mb-1"></FaGlobe>portfolio website
      </button>
    </div>
  </Link>
);

export default ViewPortfolio;
