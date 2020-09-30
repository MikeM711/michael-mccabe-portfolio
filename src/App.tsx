import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NavBar from "./nav-items/navbar";
import NavHome from "./nav-items/nav-home";
import NavExperience from "./nav-items/nav-experience";
import "./App.css";

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [activeComponent, setActiveComponent] = useState<string>("home");
  const isMobile: boolean = windowSize < 1042;

  useEffect(() => {
    // https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  const handleNavItem = (item: string) => {
    setActiveComponent(item);
  };

  return (
    <div id="app" className="container">
      {isMobile ? (
        <div>Hello mobile</div>
      ) : (
        <div className="computer">
          <div className="row nav-main valign-wrapper">
            <div className="col l12">
              <NavBar handleNavItem={handleNavItem} />
              <div className="main-card card">
                {activeComponent === "home" ? 
                
                <CSSTransition
                  timeout={{
                    enter: 800,
                  }}
                  appear={activeComponent === "home"}
                  in={activeComponent === "home"}
                  classNames="fade"
                  unmountOnExit
                >
                  <>
                    <NavHome />
                    <div className="overlay"></div>
                  </>
                </CSSTransition>
                : false}
                
                {activeComponent === "experience" ? 
                
                <CSSTransition
                  timeout={{
                    enter: 800,
                  }}
                  appear={activeComponent === "experience"}
                  in={activeComponent === "experience"}
                  classNames="fade"
                  unmountOnExit
                >
                  <>
                    <NavExperience />
                    <div className="overlay"></div>
                  </>
                </CSSTransition>
                
                : false}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
