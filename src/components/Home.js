import React from "react";
import "../components/styles/Home.scss";
import Links from "../components/Links";
import Footer from "../components/Footer";
import ImageProfile from "../components/ImageProfile";

const Home = ({ username }) => {
  return (
    <React.Fragment>
      <main className="flex-shrink-0 pt-5 text-center bgPrincipalContainer">
        <div className="container">
          <ImageProfile />
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="username">{username}</div>
              <br />
              <p className="text-white-50 anotations">
                Hi, Juan Constantine here! Check out my links =)
              </p>
              <Links />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
