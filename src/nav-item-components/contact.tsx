import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gitIcon from "../img/icons/GitHub-Mark-Light-120px-plus.png";
import liIcon from "../img/icons/linkedin-icon.png";
import { faInbox, faFileWord } from "@fortawesome/free-solid-svg-icons";
import Pdf from "../docs/resume.pdf";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div className="row contact-information">
      <a href="mailto:michaelmccabe711@gmail.com" target="_blank">
        <FontAwesomeIcon className="fa fa-inbox fa-3x" icon={faInbox} />
      </a>

      <span className="dot-separator"></span>

      <a href="https://github.com/MikeM711" target="_blank">
        <img className="git-icon" src={gitIcon} alt="git-icon" />
      </a>

      <span className="dot-separator"></span>

      <a href="https://www.linkedin.com/in/michaelmccabe711/" target="_blank">
        <img className="li-icon" src={liIcon} alt="li-icon" />
      </a>

      <span className="dot-separator"></span>

      <a href={Pdf} target="_blank">
        <FontAwesomeIcon className="fa fa-resume fa-3x" icon={faFileWord} />
      </a>
    </div>
  );
};

export default Contact;
