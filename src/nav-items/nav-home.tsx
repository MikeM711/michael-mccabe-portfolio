import React from "react";
import profileImage from "../img/michael-pic.png";

const NavHome: React.FC = () => {
  return (
    <div className="nav-home">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <h3>Michael McCabe</h3>
            <p className="my-status">Software Developer Master's Student</p>
            <p className="my-status">at Boston University</p>
          </div>
        </div>
        <div className="card-image">
          <img
            src={profileImage}
            alt="profile-image"
            style={{ filter: "brightness(100%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavHome;
