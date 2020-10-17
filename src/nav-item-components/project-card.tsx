import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

interface Props {
  repo: any | undefined;
  title: string;
  description: string[];
}

const ProjectCard: React.FC<Props> = ({ repo, title, description }) => {
  return (
    <div className="col offset-l1 l5 project-description">
      <p className="project-title">{title}</p>

      {repo !== undefined ? (
        <div className="github-stats-card">
          <span className="star-count">{repo.stargazers_count} ⭐️</span>
          <span className="fork-count">
            {repo.forks_count}
            <FontAwesomeIcon className="code-fork fa-1x" icon={faCodeBranch} />
          </span>
        </div>
      ) : (
        <div className="github-stats-card-wait">Loading GitHub stats...</div>
      )}
      <div className="project-content">
        {description.map((singleDescription) => {
          return <p>{singleDescription}</p>;
        })}
      </div>
      <div className="links-card row">
        <p className="col l6 m6 s6">&lt;/&gt; Code</p>
        <p className="col l6 m6 s6">
          <FontAwesomeIcon className="code-fork fa-1x" icon={faLaptopCode} />{" "}
          Demo
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
