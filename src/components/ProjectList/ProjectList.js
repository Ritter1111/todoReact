import React from "react";
import propTypes from "prop-types";
import ProjectComponent from "../ProjectComponent/ProjectComponent";

export default function ProjectList({ projectItem }) {
  return (
    <div className="container">
      {projectItem.map((item, i) => (
        <ProjectComponent key={i} projectItem={item} />
      ))}
    </div>
  );
}
ProjectList.propTypes = {
  projectItem: propTypes.array,
};
