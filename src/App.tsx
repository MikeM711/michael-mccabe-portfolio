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

import "./App.css";
import ProjectCard from "./nav-item-components/project-card";
import ProjectTabletDisplay from "./nav-item-components/project-tablet-display";
import handwritingRecognition from "./img/handwriting-recognition.png";

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

  let youtubeScraperRepo;
  let handwritingRecognitionRepo;
  let parseitRepo;
  for (let repo of repositories) {
    if (repo.name === "React-YouTube-Comment-Section-Scraper") {
      youtubeScraperRepo = repo;
    } else if (repo.name === "Deep-Learning-Handwriting-Recognition") {
      handwritingRecognitionRepo = repo;
    } else if (repo.name === "ParseIt") {
      parseitRepo = repo;
    }
  }

  return (
    <div id="app" className="app-root">
      {isMobile ? (
        <div className="mobile">
          
          <NavBarMobile handleNavItem={handleNavItem} activeComponent={activeComponent}/>
          <div className="project-listing-mobile">
          <ProjectCard 
            repo={handwritingRecognitionRepo}
            title={'Handwriting Recognition'}
            description={['A web tool that utilizes pre-trained deep learning models to predict users\' handwriting.', 
            'The full A.I. network utilizes a jury of 5 convolutional models to create a singular prediction.', 
            'See my Python Notebook inside the Code link for more detail on how these models were trained.']}
          />
          <br/>
          
          <div className="project-thumb project-thumb-mobile">
          <ProjectTabletDisplay
              alt="handwriting-recognition"
              appImage={handwritingRecognition}
            />
          </div>
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
                        {navItem === "home" ? <NavHome /> : false}
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
