import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBolt, faChartBar, faCode, faHome, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

import './navbar-mobile.css';

interface Props {
  isNarrow: boolean;
}

const NavBarMobileSmallest: React.FC<Props> = ({isNarrow}) => {

  const home = (
    <>
      <li className="tab">
        <a className="inactive home"
          href="#home">
          <FontAwesomeIcon className="home fa-2x" icon={faHome} />
        </a>
      </li>
    </>
  )
  const experience = (
    <>
      <li className="tab">
        <a className="inactive experience"
          href="#experience">
          <FontAwesomeIcon className="experience fa-2x" icon={faToolbox} />
        </a>
      </li>
    </>
  )
  const openSource = (
    <>
    <li className="tab">
        <a className="inactive open-source"
          href="#open-source">
          <FontAwesomeIcon className="open-source fa-2x" icon={faCode} />
        </a>
      </li>
    </>
  )
  const projects = (
    <>
      <li className="tab">
        <a className="inactive projects"
          href="#projects">
          <FontAwesomeIcon className="projects fa-2x" icon={faLayerGroup} />
        </a>
      </li>
    </>
  )
  const presentations = (
    <>
      <li className="tab">
        <a className="inactive presentations"
          href="#presentations" target="_parent">
          <FontAwesomeIcon className="presentations fa-2x" icon={faChartBar} />
        </a>
      </li>
    </>
  )
  const current = (
    <>
      <li className="tab">
        <a className="inactive current"
          href="#current" target="_parent">
        <FontAwesomeIcon className="current fa-2x" icon={faBolt} />
        </a>
      </li>
    </>
  )

  return (
    <div className="mobile-site-navbar">
      {isNarrow ? (
        <div className="mobile-narrow">
          <div className="row">
            <ul className="tabs">
              <div className="col l4 m4 s4">
                {home}
              </div>
              <div className="col l4 m4 s4">
                {experience}
              </div>
              <div className="col l4 m4 s4">
                {openSource}  
              </div>
            </ul>
          </div>
          <div className="row">
            <ul className="tabs">
            <div className="col l4 m4 s4">
                {projects}
              </div>
              <div className="col l4 m4 s4">
                {presentations}
              </div>
              <div className="col l4 m4 s4">
                {current}  
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="mobile-regular">
          <div className="row">
            <ul className="tabs">
            {home}
            {experience}
            {openSource}
            {projects}
            {presentations}
            {current}
            </ul>
          </div>
      </div>)}
    </div>
  );
};

export default NavBarMobileSmallest;
