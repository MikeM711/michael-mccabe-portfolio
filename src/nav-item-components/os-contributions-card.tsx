import React from "react";

interface Props {
  title: string;
  problem: string;
  solution: string;
  prUrl: string;
  submittedCodeUrl: string;
  tools: string[];
}

// const OpenSourceCard: React.FC<Props> = ({ repo, title, description, tools }) => {
const OSContributionsCard: React.FC<Props> = ({
  title,
  problem,
  solution,
  prUrl,
  submittedCodeUrl,
  tools,
}) => {
  return (
    <div className="pull-request row">
      <div className="pull-request-title">
        <h4 className="pr-sub-title">{title}</h4>
        <div className="language-border">
          {tools.map((tool, idx) => {
            return <span key={idx}>{tool}</span>;
          })}
        </div>
      </div>

      <div className="row open-source-description">
        <div className="col l4 m6 s12 problem">
          <span>
            <p className="description-sub-title">Problem</p>
            <p>{problem}</p>
          </span>
        </div>
        <div className="col l4 m6 s12 solution">
          <span>
            <p className="description-sub-title">Solution</p>
            <p>{solution}</p>
          </span>
        </div>
        <div className="col l4 m12 s12 links">
          <span>
            <p className="description-sub-title">Links</p>
          </span>
          <div className="row">
            <div className="col l12 m6 s12">
              <a href={prUrl} target="_blank">
                Pull Request
              </a>
            </div>

            <div className="col l12 m6 s12">
              <a href={submittedCodeUrl} target="_blank">
                Submitted Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSContributionsCard;
