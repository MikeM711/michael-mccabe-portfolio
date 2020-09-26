import React, { useEffect } from "react";
import M from "materialize-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBolt, faChartBar, faCode, faHome, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

const NavBar: React.FC = () => {
  useEffect(() => {
    // tabs initialization
    const elem = document.querySelectorAll(".tabs");
    const options = {};
    const instance = M.Tabs.init(elem, options);
  }, []);

  return (
    <div className="site-navbar">
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col l2">
              <a className="active home" href="#home">
                <span>Home</span>
                <FontAwesomeIcon className="home fa-3x" icon={faHome} />
              </a>
            </li>

            <li className="tab col l2">
              <a href="#experience">
              <span>Experience</span>
                <FontAwesomeIcon className="experience fa-3x" icon={faToolbox} />
              </a>
            </li>

            <li className="tab col l2">
              <a href="#open-source">
              <span>Open Source</span>
                <FontAwesomeIcon className="open-source fa-3x" icon={faCode} />
              </a>
            </li>

            <li className="tab col l2">
              <a href="#projects">
              <span>Projects</span>
                <FontAwesomeIcon className="projects fa-3x" icon={faLayerGroup} />
              </a>
            </li>

            <li className="tab col l2">
              <a href="#presentations">
                <span>Presentations</span>
                <FontAwesomeIcon className="presentations fa-3x" icon={faChartBar} />
              </a>
            </li>

            <li className="tab col l2">
              <a href="#current">
              <span>Current</span>
              <FontAwesomeIcon className="current fa-3x" icon={faBolt} />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
