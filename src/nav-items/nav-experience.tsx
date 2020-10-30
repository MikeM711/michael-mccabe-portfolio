import React from "react";

import "./nav-experience.css";

const NavExperience: React.FC = () => {
  return (
    <>
      <div className="card-stacked nav-experience">
        <div className="card-content">
          <h3 className="card-title">Experience</h3>
          <hr />
          <p>
            Hi, my name is Michael McCabe, and I am a Software Developer Master's
            Student, Engineer and Open Source contributor.
          </p>
          <p>
            When I was a Mechanical Engineer, I have spent a considerable amount
            of time working with both JavaScript and Python, and frameworks such
            as React and Node.js in my spare time. At work, I have used these
            tools to both automate and maximize productivity. In particular, I
            developed a full-stack production planner web application that
            solved many production-related business problems for my employer,
            saving $60k/yr in production costs.
          </p>
          <p>
            After two years of being a Software Developer hobbyist, I have
            decided to enroll into Boston University's Software Development
            Master program (online) and become a full-time Software Developer.
            Expected graduation: August 2021.
          </p>

          <p>
            When I'm not studying for school, I am either contributing to open
            source or working on my side-project, InfinitePython.
          </p>
          <hr />
          <h4 className="card-sub-title">Courses Completed</h4>
          <p>
            <b>Server-Side Web Development:</b> Hands-on web application
            development using Node.js, MongoDB (NoSQL), JavaScript, Express
            along with PHP/MySQL.
          </p>
          <p>
            <b>Database Design and Implementation for Business:</b> A deep dive
            into relational databases, SQL, day-to-day transactional databases,
            data warehouses, distributed databases and cloud services.
          </p>
          <p>
            <b>Information Structures with Python:</b> A focus on a strong
            foundation in Python programming.
          </p>
          <hr />
          <h4 className="card-sub-title skills-sub-title">Skills</h4>
          <div className="row skill-listing center">
            <div className="col l3 m6 s12">
              <p>JavaScript</p>
            </div>
            <div className="col l3 m6 s12">
              <p>Python</p>
            </div>
            <div className="col l3 m6 s12">
              <p>Node.js</p>
            </div>
            <div className="col l3 m6 s12">
              <p>Express</p>
            </div>
            <div className="col l3 m6 s12">
              <p>React/Redux</p>
            </div>
            <div className="col l3 m6 s12">
              <p>MongoDB</p>
            </div>
            <div className="col l3 m6 s12">
              <p>PostgreSQL</p>
            </div>
            <div className="col l3 m6 s12">
              <p>HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavExperience;
