import React from "react";

import "./nav-open-source.css";

const NavOpenSource: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-open-source">
        <div className="card-content">
          <h3 className="card-title">Open Source</h3>
          <hr />
          <div className="links-container">
            <h4 className="pr-sub-title">Mozilla Links</h4>
            <div className="row sub-title-links">
              <p className="col l12 m12 s12">
                <a
                  href="https://mozillians.org/en-US/u/MikeM711/"
                  target="_blank"
                >
                  Mozillian Account
                </a>
              </p>
              <p className="col l12 m12 s12">
                <a
                  href="https://wiki.mozilla.org/Add-ons/Contribute/Recognition"
                  target="_blank"
                >
                  Contributor Recognition
                </a>{" "}
                &nbsp;(MikeM711)
              </p>
            </div>
          </div>

          <div className="pull-request row">
            <div className="pull-request-title">
              <h4 className="pr-sub-title">
                web-ext: Enable extensions to load on android build variants
              </h4>
              <div className="language-border">
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>
            </div>

            <div className="row open-source-description">
              <div className="col l4 m6 s12 problem">
                <span>
                <p className="description-sub-title">
                Problem
                </p>
                <p>Mozilla browser build variants on Android were not
                directly supported by web-ext.
                </p>
                </span>
                
              </div>
              <div className="col l4 m6 s12 solution">
                <span>
                <p className="description-sub-title" >Solution</p>
                <p>
                Logic was redefined for what the user-specified APK
                component should be evaluated to. An additional test was added
                to account for new logic.
                </p>
                </span>
              </div>
              <p className="col l4 m12 s12 links">
                <div className="row">
                  <p className="col l12 m12 s6">
                    <a
                      href="https://github.com/mozilla/web-ext/pull/1918"
                      target="_blank"
                    >
                      Pull Request
                    </a>
                  </p>
                  

                  <p className="col l12 m12 s6">
                    <a
                      href="https://github.com/mozilla/web-ext/pull/1918/files"
                      target="_blank"
                    >
                      Submitted Code
                    </a>
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavOpenSource;
