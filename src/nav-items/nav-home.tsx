import React from "react";
import profileImage from "../img/michael-pic.png";
import NavHomeAnimation from './nav-home-animation';
import "./nav-home.css";

const NavHome: React.FC = () => {
  // deleting "horizontal" gives you a good "mobile view" looking application
  return (
    <div className="nav-home row">
      <div className="card-content col l6">
        <h3>Michael McCabe</h3>
        <p className="my-status">Software Developer Master's Student</p>
        <p className="my-status">at Boston University</p>
        <br/>
        <hr/>
        <NavHomeAnimation/>
      </div>
      <div className="card-image col l6">
        <img
          src={profileImage}
          alt="profile"
          style={{ filter: "brightness(100%)" }}
        />
      </div>
    </div>
  );
};

export default NavHome;
