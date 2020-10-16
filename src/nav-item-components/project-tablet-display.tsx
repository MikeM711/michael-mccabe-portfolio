import React from "react";

interface Props {
  alt: string;
  appImage: string;
}

const ProjectTabletDisplay: React.FC<Props> = ({ alt, appImage }) => {
  return (
    <>
      <img alt={alt} src={appImage} />
      <span className="monitor-circle"></span>
    </>
  );
};

export default ProjectTabletDisplay;
