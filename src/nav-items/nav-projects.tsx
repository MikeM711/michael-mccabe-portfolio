import React, { useEffect, useState } from "react";
import youtubeScraper from "../img/youtube-scraper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./nav-projects.css";

const NavProjects: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/MikeM711/repos`).then((res) => {
      setRepositories(res.data);
    });
  }, []);
  let youtubeScraperRepo;
  let handwritingRecognitionRepo;
  let parseitRepo;
  for (let repo of repositories) {
    if (repo.name === "React-YouTube-Comment-Section-Scraper") {
      youtubeScraperRepo = repo;
    } else if (repo.name === "Deep-Learning-Handwriting-Recognition") {
      handwritingRecognitionRepo = repo;
    } else if (repo.name === "ParseIt") {
      parseitRepo = repo;
    }
  }
  console.log(handwritingRecognitionRepo);

  return (
    <>
      <div className="card-stacked nav-projects">
        <div className="card-content">
          <h3 className="card-title">Projects</h3>
          <hr />
        </div>
        <div className="row first-project">
          <div className="col offset-l1 l5 project-description">
            <p className="project-title">Youtube Comment Scraper</p>

            {youtubeScraperRepo !== undefined ? (
              <div className="github-stats-card">
                <span className="star-count">
                  {youtubeScraperRepo.stargazers_count} ⭐️
                </span>
                <span className="fork-count">
                  {youtubeScraperRepo.forks_count}
                  <FontAwesomeIcon
                    className="code-fork fa-1x"
                    icon={faCodeBranch}
                  />
                </span>
              </div>
            ) : (
              <div className="github-stats-card-wait">
                Loading GitHub stats...
              </div>
            )}

            <p className="project-description">
              A web app that uses a bot to render and capture YouTube comments,
              as well as comment characteristics, on a given YouTube video.
            </p>
            <p className="project-description">
              When the application is supplied with comments, users are able to
              filter comments using variety of filter functions that can be
              chained together.
            </p>
          </div>
          <div className="col l6 project-thumb">
            <img alt="youtube-scraper" src={youtubeScraper} />
            <span className="monitor-circle"></span>
          </div>
        </div>
        <div className="row">
          <br />
          New Project Row
        </div>
      </div>
    </>
  );
};

export default NavProjects;
