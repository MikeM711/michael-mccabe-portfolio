import React, {useState, useEffect} from "react";

import NavMain from "./nav-items/nav-main";
import "./App.css";

const App: React.FC = () => {

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth)
  const isMobile:boolean = windowSize < 1042;

  React.useEffect(() => {
    // https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return (
    <div id="app" className="container">
      {isMobile ? (
        <div>Hello mobile</div>
      ) : (
        <div id="nav-items">
          <NavMain />
        </div>
      )}
    </div>
  );
}

export default App;
