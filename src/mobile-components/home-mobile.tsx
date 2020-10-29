import React from "react";
import profileImage from "../img/michael-pic.png";

import './home-mobile.css';

const HomeMobile: React.FC = () => {

  return (
    <div className="nav-home-mobile">
      <div className="card-content">
        <h3>Michael McCabe</h3>
        <p className="my-status">Software Developer Master's Student</p>
        <p className="my-status">at Boston University</p>
        <br />
        <hr />
      </div>
      <div className="card-image-mobile col">
        <img
          src={profileImage}
          alt="profile"
          style={{ filter: "brightness(100%)" }}
        />
      </div>
    </div>
  );
};

export default HomeMobile;
