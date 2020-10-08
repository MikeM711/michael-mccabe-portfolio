import React from "react";
import youtubeScraper from "../img/youtube-scraper.png";
import './nav-projects.css';

const NavProjects: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-projects">
        <div className="card-content">
          <h3>Projects</h3>
          <p>long string</p>
          <p>long string</p>
          <p>long string</p>
          <p>long string</p>
          <p>long string</p>
        </div>
        <div className="row first-project">
          <div className="col offset-l1 l5 project-description">
          <h4>Youtube Comment Section Scraper</h4>
          <h5>A web app that renders and captures youtube comments as well as comment characteristics.</h5>
          <h5>Allows users to sort through comments by a variety of filters.</h5>
          </div>
          <div className="col l6 project-thumb">
          <img src={youtubeScraper}/>
          <span className="monitor-circle"></span>
          </div>
        </div>
        <div className="row">
          <br/>
          New Project Row
        </div>
      </div>
    </>
  );
};

export default NavProjects;
