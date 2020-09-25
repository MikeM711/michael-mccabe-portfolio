import React, { useEffect } from "react";
import M from "materialize-css";

const NavBar: React.FC = () => {
  useEffect(() => {
    const elem = document.querySelectorAll(".tabs");
    const options = {};
    const instance = M.Tabs.init(elem, options);
  }, []);
  return (
    <div className="site-navbar">
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col offset-l2 l2">
              <a className="active" href="#test1">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li className="tab col l2">
              <a href="#test2">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li className="tab col l2">
              <a href="#test3">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li className="tab col l2">
              <a href="#test4">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
