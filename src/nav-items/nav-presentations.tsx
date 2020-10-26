import React from "react";

import "./nav-presentations.css";

const NavPresentations: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-presentations">
        <div className="card-content">
          <h3 className="card-title">Presentations</h3>
          <hr />
          <h4 className="card-sub-title skills-sub-title">
            CS512 Final Project: ImageOCR Module
          </h4>
          <p>
            The ImageOCR module below simplifies the optical character recognition
            (OCR) process for extracting text off of images. In addition, this
            module features a method that can manipulate a user's image into
            pure back and white (or inverse) for more efficient reading. When
            complete, the user has the option to create HTML for a pretty
            output.
          </p>
          <p>
            Using this tool, users could run through thousands of
            similarly-structured business forms or reciepts and extract text
            from them, as opposted to manually typing out text found in the
            images.
          </p>
          <p>
            <a
              href="https://github.com/MikeM711/Image-To-HTML-Text"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>

          <div className="iframe-wrapper">
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/gVSXD92PyZc?rel=0;"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPresentations;
