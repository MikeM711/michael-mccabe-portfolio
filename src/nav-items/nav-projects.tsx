import React from "react";
import youtubeScraper from "../img/youtube-scraper.png";
import handwritingRecognition from "../img/handwriting-recognition.png";
import parseit from "../img/parseit.png";
import ProjectCard from '../nav-item-components/project-card';
import ProjectTabletDisplay from '../nav-item-components/project-tablet-display';

import "./nav-projects.css";

interface Props {
  repositories: any[];
}

const NavProjects: React.FC<Props> = ({repositories}) => {
  let youtubeScraperRepo;
  let handwritingRecognitionRepo;
  let parseitRepo;

  // Find repositories for desired projects
  for (let repo of repositories) {
    if (repo.name === "React-YouTube-Comment-Section-Scraper") {
      youtubeScraperRepo = repo;
    } else if (repo.name === "Deep-Learning-Handwriting-Recognition") {
      handwritingRecognitionRepo = repo;
    } else if (repo.name === "ParseIt") {
      parseitRepo = repo;
    }
  }

  return (
    <>
      <div className="card-stacked nav-projects">
        <div className="card-content">
          <h3 className="card-title">Projects</h3>
          <hr />
        </div>

        <div className="row project-listing first-project">
          <ProjectCard 
            repo={parseitRepo}
            title={'ParseIt'}
            description={['A full-stack web tool that allows non-technical people the ability to extract information, or perform data science, for large amounts of PDF documents or complex text data.',
            'ParseIt comes with 21 simple, open-ended modules that can either add, remove, replace, split or save text. The purpose of ParseIt is to "stack" these modules on top of each other, and have your input funneled through each module',
            'The tool incorporates text-preview features that use text highlighting to let the user know exactly how they are parsing their data before they commit to a parsing action.']}
          />
          
          <div className="col l6 project-thumb">
            <ProjectTabletDisplay
              alt="parseIt"
              appImage={parseit}
            />
          </div>
          
        </div>

        <br/>
        <br/>
        <br/>

        <div className="row project-listing second-project">
          <ProjectCard 
            repo={youtubeScraperRepo}
            title={'YouTube Comment Scraper'}
            description={['A web application that uses a bot to render and capture YouTube comments, as well as comment characteristics, on a given YouTube video.', 
            'When the application is supplied with comments, users are able to filter comments using variety of filter functions that can be chained together.']}
          />
          
          <div className="col l6 project-thumb">
            <ProjectTabletDisplay
              alt="youtube-scraper"
              appImage={youtubeScraper}
            />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="row project-listing third-project">
          <ProjectCard 
            repo={handwritingRecognitionRepo}
            title={'Handwriting Recognition'}
            description={['A web tool that utilizes pre-trained deep learning models to predict users\' handwriting using a resizable drawing canvas.', 
            'The full A.I. network utilizes a jury of 5 convolutional models to create a singular prediction.', 
            'See my Python Notebook inside the Code link for more detail on how these models were trained.']}
          />
          
          <div className="col l6 project-thumb">
            <ProjectTabletDisplay
              alt="handwriting-recognition"
              appImage={handwritingRecognition}
            />
          </div>
          
        </div>

      </div>
    </>
  );
};

export default NavProjects;
