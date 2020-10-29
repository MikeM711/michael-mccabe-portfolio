import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBolt, faChartBar, faCode, faHome, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './navbar-mobile.css';

interface Props {
  handleNavItem: (item: string) => void;
  activeComponent: string;
}

const NavBarMobile: React.FC<Props> = ({handleNavItem, activeComponent}) => {

  // https://stackoverflow.com/a/56863941
  const handleClick = (item:string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavItem(item);
  }

  return (
    <div className="mobile-site-navbar">
          <ul className="tabs">
            <li className="tab">
              <a
                href="#home" onClick={handleClick("home")}>
                <FontAwesomeIcon className="home fa-2x" icon={faHome} />
              </a>
            </li>

            <li className="tab">
              <a
                href="#experience" onClick={handleClick("experience")}>
                <FontAwesomeIcon className="experience fa-2x" icon={faToolbox} />
              </a>
            </li>

            <li className="tab">
              <a
                href="#open-source" onClick={handleClick("open-source")}>
                <FontAwesomeIcon className="open-source fa-2x" icon={faCode} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "projects" ? "active" : "inactive"}
                href="#projects" onClick={handleClick("projects")}>
                <FontAwesomeIcon className="projects fa-2x" icon={faLayerGroup} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "presentations" ? "active" : "inactive"}
                href="#presentations" target="_parent">
                <FontAwesomeIcon className="presentations fa-2x" icon={faChartBar} />
              </a>
            </li>

            <li className="tab">
              <a className={activeComponent === "current" ? "active" : "inactive"}
                href="#current" target="_parent">
              <FontAwesomeIcon className="current fa-2x" icon={faBolt} />
              </a>
            </li>

          </ul>

    </div>
  );
};

export default NavBarMobile;
