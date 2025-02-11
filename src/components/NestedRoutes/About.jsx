import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="continer-fluid">
      <div className="row">
        <div className="col-lg-2 d-flex justify-content-center align-items-start flex-column">
          <Link to="/about">About Me</Link>
          <Link to="/about/technical">Technical skills</Link>
          <Link to="/about/non-technical">Non-Technical skills</Link>
        </div>
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
