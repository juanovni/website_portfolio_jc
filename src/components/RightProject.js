import React from "react";

const RightProject = (project) => {
  const { id, image, title, descripction, access_to_link } = project;
  return (
    <div key={id} className="row" style={{ backgroundColor: "#000" }}>
      <div className="col-lg-6 mx-auto">
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-right">
              <h4 className="text-white">{title}</h4>
              <p className="mb-0 text-white-50">{descripction}</p>
              <p className="text-uppercase mt-2 " style={{ fontWeight: 600 }}>
                {" "}
                {access_to_link ? <a href={access_to_link}>ACCESS IT</a> : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mx-auto">
        <img className="img-fluid" src={image} alt="" />
      </div>
    </div>
  );
};

export default RightProject;
