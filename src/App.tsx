import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";

import NavBar from "./nav-items/navbar";
import NavBarMobile from "./nav-items/navbar-mobile";
import NavHome from "./nav-items/nav-home";
import NavExperience from "./nav-items/nav-experience";
import NavOpenSource from './nav-items/nav-open-source';
import NavProjects from './nav-items/nav-projects';
import NavPresentations from './nav-items/nav-presentations';
import NavCurrent from './nav-items/nav-current';
import MobileProjects from './mobile-components/mobile-projects';

import "./App.css";
import "./App-mobile.css";

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [activeComponent, setActiveComponent] = useState<string>("home");
  const [repositories, setRepositories] = useState<any[]>([]);

  const isMobile: boolean = windowSize < 1042;
  const navItems = ["home", "experience", "open-source", "projects", "presentations", "current"];

  useEffect(() => {
    // https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    axios.get(`https://api.github.com/users/MikeM711/repos`).then((res) => {
      setRepositories(res.data);
    });

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  const handleNavItem = (item: string) => {
    setActiveComponent(item);
  };

  return (
    <div id="app" className="app-root">
      {isMobile ? (
        <div className="mobile">
          <NavBarMobile handleNavItem={handleNavItem} activeComponent={activeComponent}/>
          <div className="card mobile-card">
            <NavExperience />
          </div>
          <div className="card mobile-card">
            <NavOpenSource/> 
          </div>
          <div className="card mobile-card">
            <MobileProjects repositories={repositories}/> 
          </div>
          <div className="card mobile-card">
            <NavPresentations /> 
          </div>
        </div>
        
      ) : (
        <div className="desktop">
          <div className="row nav-main valign-wrapper">
            <div className="col l12">
              <NavBar handleNavItem={handleNavItem} activeComponent={activeComponent}/>
              <div className="main-card card">

                {navItems.map((navItem, idx) => {
                  return(
                    <div className="item-view" key={idx}>
                      {activeComponent === navItem ? 
                      
                      <CSSTransition
                        timeout={{
                          enter: 800,
                        }}
                        appear={true}
                        in={true}
                        classNames="fade"
                        unmountOnExit
                      >
                        <>
                        {navItem === "home" ? <NavHome handleNavItem={handleNavItem} /> : false}
                        {navItem === "experience" ? <NavExperience /> : false}
                        {navItem === "open-source" ? <NavOpenSource /> : false}
                        {navItem === "projects" ? <NavProjects 
                        repositories={repositories}/> : false}
                        {navItem === "presentations" ? <NavPresentations /> : false}
                        {navItem === "current" ? <NavCurrent /> : false}
                          
                          <div className="overlay"></div>
                        </>
                      </CSSTransition>
                      : false}
                    </div>
                  )
                })}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
