import React from "react";
import ProjectCard from "../nav-item-components/project-card";
import ProjectTabletDisplay from "../nav-item-components/project-tablet-display";
import projectData from "../project-data/project-data";

import "./nav-projects.css";

interface Props {
  repositories: any[];
}

const NavProjects: React.FC<Props> = ({ repositories }) => {
  return (
    <>
      <div className="card-stacked nav-projects">
        <div className="card-content">
          <h3 className="card-title">Projects</h3>
          <hr />
        </div>

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
              className={`row project-listing ${project.repoName}`}
            >
              <ProjectCard
                repo={projectRepo}
                title={project.title}
                description={project.description}
              />
              <div className="col l6 project-thumb">
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

export default NavProjects;
