import React from "react";

import ProjectCard from "../nav-item-components/project-card";
import ProjectTabletDisplay from "../nav-item-components/project-tablet-display";
import projectData from "../project-data/project-data";
import './mobile-projects.css';

interface Props {
  repositories: any[];
}

const MobileProjects: React.FC<Props> = ({ repositories }) => {
  return (
    <>
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
            <ProjectCard
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
    </>
  );
};

export default MobileProjects;
