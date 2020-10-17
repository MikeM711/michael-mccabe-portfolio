import React, { useEffect } from "react";
import M from "materialize-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBolt, faChartBar, faCode, faHome, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './navbar-mobile.css';

interface Props {
  handleNavItem: (item: string) => void;
  activeComponent: string;
}

const NavBarMobile: React.FC<Props> = ({handleNavItem, activeComponent}) => {

  useEffect(() => {
    // tabs initialization
    const elem = document.querySelectorAll(".tabs");
    const options = {};
    const instance = M.Tabs.init(elem, options);
  }, []);

  // https://stackoverflow.com/a/56863941
  const handleClick = (item:string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavItem(item);
  }

  return (
    <div className="mobile-site-navbar">
          <ul className="tabs">
            <li className="tab">
              <a className={activeComponent === "home" ? "active" : "inactive"} 
                href="#home" onClick={handleClick("home")}>
                <span>Home</span>
                <FontAwesomeIcon className="home fa-2x" icon={faHome} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "experience" ? "active" : "inactive"}
                href="#experience" onClick={handleClick("experience")}>
                <span>Experience</span>
                <FontAwesomeIcon className="experience fa-2x" icon={faToolbox} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "open-source" ? "active" : "inactive"}
                href="#open-source" onClick={handleClick("open-source")}>
                <span>Open Source</span>
                <FontAwesomeIcon className="open-source fa-2x" icon={faCode} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "projects" ? "active" : "inactive"}
                href="#projects" onClick={handleClick("projects")}>
                <span>Projects</span>
                <FontAwesomeIcon className="projects fa-2x" icon={faLayerGroup} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "presentations" ? "active" : "inactive"}
                href="#presentations" onClick={handleClick("presentations")}>
                <span>Presentations</span>
                <FontAwesomeIcon className="presentations fa-2x" icon={faChartBar} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "current" ? "active" : "inactive"}
                href="#current" onClick={handleClick("current")}>
                <span>Current</span>
              <FontAwesomeIcon className="current fa-2x" icon={faBolt} />
              </a>
            </li>

          </ul>

    </div>
  );
};

export default NavBarMobile;
