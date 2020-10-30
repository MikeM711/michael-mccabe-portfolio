import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

interface Props {
  repo: any | undefined;
  title: string;
  description: string[];
  code: string;
  demo: string;
  tools: string[];
}

const ProjectCardMobile: React.FC<Props> = ({ repo, title, description, tools, code, demo }) => {
  return (
    <div className="col l12 project-description row">
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

      <div className="language-border">
        {tools.map((tool, idx) => {
          return <span key={idx}>{tool}</span>
        })}
      </div>

      <div className="project-content">
        {description.map((singleDescription, idx) => {
          return <p key={idx}>{singleDescription}</p>;
        })}
      </div>
      <div className="links-card">
        <div className="col l6 m6 s6">
          <a href={code} target="_blank">&lt;/&gt; Code</a>
        </div>
        <div className="col l6 m6 s6">
          <a href={demo} target="_blank">
            <FontAwesomeIcon className="code-fork fa-1x" icon={faLaptopCode} />{" "}
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
