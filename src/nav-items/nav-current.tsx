import React from "react";

import "./nav-current.css";

const NavCurrent: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-current">
        <div className="card-content">
          <h3 className="card-title">Current</h3>
          <hr />
          <h4 className="card-sub-title">InfinitePython</h4>
          <p>
            InfintePython is hi currently my most significant side-project. It is
            built using TypeScript, Node.js, Express and React.
          </p>
          <p>
            <b>Problem:</b> Similarly to learning how to drive a car, learning
            Python (or any language) requires both studying and putting your
            skills to the test. There are a lot of good Python study resources
            on the internet, but very few will test your fundamental skills
            effectively.
          </p>

          <p>
            <b>Solution:</b> InfinitePython is a website that randomly generates
            problems on significant Python topics. Every question is 100%
            unique, so there is no worry of memorizing InfinitePython's question
            set. A user can work on an infinite number of problems for topics
            that they may feel rusty on.
          </p>

          <p>
            <b>Progress:</b> At the moment, the Node.js backend is able to
            create an infinite set of Python slicing problems of varying
            characteristics. A set of 10 generated Python questions are
            evaluated at a time using a Python shell inside Node.js; both the
            problems and solutions are sent to the React frontend for the user
            to answer.
          </p>

          <p>
            Some Future Plans:
            <ul>
              <li>
                Develop more questions for significant Python topics (ie:
                collection methods, beginner for/while loops, etc.)
              </li>
              <li>Move from Heroku to AWS</li>
              <li>Update the CSS and incorporate Sass</li>
              <li>User Authentication</li>
              <li>Expand into JavaScript</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavCurrent;
