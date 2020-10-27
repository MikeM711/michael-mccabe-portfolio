import React from "react";
import profileImage from "../img/michael-pic.png";
import NavHomeAnimation from "./nav-home-animation";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav-home.css";

interface Props {
  handleNavItem: (item: string) => void;
}

const NavHome: React.FC<Props> = ({ handleNavItem }) => {
  // deleting "horizontal" gives you a good "mobile view" looking application

  const clickImg = () => {
    // direct user to "experience" along with the correct nav animation and location
    handleNavItem("experience");
    const exp = document.getElementById("experience_id");
    if (exp) {
      exp.click();
    }
  };

  return (
    <div className="nav-home row">
      <div className="card-content col l6">
        <h3>Michael McCabe</h3>
        <p className="my-status">Software Developer Master's Student</p>
        <p className="my-status">at Boston University</p>
        <br />
        <hr />
        <NavHomeAnimation />
      </div>
      <div className="card-image col l6" onClick={clickImg}>
        <span className="arrow">
          <FontAwesomeIcon className="code-fork fa-4x" icon={faAngleRight} />
        </span>
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
