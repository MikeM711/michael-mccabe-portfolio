import React from "react";
import OSContributionsCard from "../nav-item-components/os-contributions-card";
import OSContributionsData from "../data/os-contributions-data";

import "./nav-open-source.css";

const NavOpenSource: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-open-source">
        <div className="card-content">
          <h3 className="card-title">Open Source</h3>
          <hr />
          <div className="links-container pull-request-title">
            <div className="row sub-title-links">
              <div className="col l12 m12 s12">
                <a
                  href="https://mozillians.org/en-US/u/MikeM711/"
                  target="_blank"
                >
                  Mozillian Account
                </a>
              </div>
              <div className="col l12 m12 s12">
                <a
                  href="https://wiki.mozilla.org/Add-ons/Contribute/Recognition"
                  target="_blank"
                >
                  Contributor Recognition
                </a>{" "}
                &nbsp;(MikeM711)
              </div>
            </div>
          </div>

          <div className="pull-requests">
            {OSContributionsData.map((contribution, idx) => {
              return (
                <OSContributionsCard
                  key={idx}
                  title={contribution.title}
                  problem={contribution.problem}
                  solution={contribution.solution}
                  prUrl={contribution.prUrl}
                  submittedCodeUrl={contribution.submittedCodeUrl}
                  tools={contribution.tools}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavOpenSource;
