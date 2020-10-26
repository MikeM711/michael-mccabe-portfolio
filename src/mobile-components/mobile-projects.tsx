import React from "react";

import ProjectCardMobile from "../nav-item-components/project-card-mobile";
import ProjectTabletDisplay from "../nav-item-components/project-tablet-display";
import projectData from "../project-data/project-data";
import './mobile-projects.css';

interface Props {
  repositories: any[];
}

const MobileProjects: React.FC<Props> = ({ repositories }) => {
  return (
    <>
    <div className="card-content mobile-projects">
      <h3 className="card-title">Projects</h3>
      <hr />
      {projectData.map((project, idx) => {
        // Find repo name
        let projectRepo;
        for (let repo of repositories) {
          if (repo.name === project.repoName) {
            projectRepo = repo;
          }
        }

        return (
          <div
            key={project.repoName}
            className={`project-listing-mobile ${project.repoName}`}
          >
            <ProjectCardMobile
              repo={projectRepo}
              title={project.title}
              description={project.description}
            />
            <div className="project-thumb project-thumb-mobile">
              <ProjectTabletDisplay
                alt={project.alt}
                appImage={project.projectImage}
              />
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default MobileProjects;
