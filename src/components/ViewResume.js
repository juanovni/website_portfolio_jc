import React from "react";
import { FaRegFolder } from "react-icons/fa";
import Pdf from "../Documents/cv_juanConstantine.pdf";

const ViewResume = () => (
  <div className="text-center">
    <a className="btn btn--4" href={Pdf} alt="CV Juan Constantine">
      <FaRegFolder className="mr-2 mb-1"></FaRegFolder>
      resume
    </a>
  </div>
);

export default ViewResume;
