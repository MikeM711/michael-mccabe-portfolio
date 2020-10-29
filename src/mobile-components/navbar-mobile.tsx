import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBolt, faChartBar, faCode, faHome, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './navbar-mobile.css';

const NavBarMobile: React.FC = () => {

  return (
    <div className="mobile-site-navbar">
          <ul className="tabs">
            <li className="tab">
              <a className="inactive"
                href="#home">
                <FontAwesomeIcon className="home fa-2x" icon={faHome} />
              </a>
            </li>

            <li className="tab">
              <a className="inactive"
                href="#experience">
                <FontAwesomeIcon className="experience fa-2x" icon={faToolbox} />
              </a>
            </li>

            <li className="tab">
              <a className="inactive"
                href="#open-source">
                <FontAwesomeIcon className="open-source fa-2x" icon={faCode} />
              </a>
            </li>

            <li className="tab">
              <a className="inactive"
                href="#projects">
                <FontAwesomeIcon className="projects fa-2x" icon={faLayerGroup} />
              </a>
            </li>

            <li className="tab">
              <a className="inactive"
                href="#presentations" target="_parent">
                <FontAwesomeIcon className="presentations fa-2x" icon={faChartBar} />
              </a>
            </li>

            <li className="tab">
              <a className="inactive"
                href="#current" target="_parent">
              <FontAwesomeIcon className="current fa-2x" icon={faBolt} />
              </a>
            </li>

          </ul>

    </div>
  );
};

export default NavBarMobile;
