import React from "react";
import propTypes from "prop-types";
import ProjectComponent from "../ProjectComponent/ProjectComponent";

export default function ProjectList({ projectItem, addTaskToProject}) {
  return (
    <div className="container">
      {projectItem.map((item, i) => (
        <ProjectComponent key={i} projectItem={item} addTaskToProject={addTaskToProject}/>
      ))}
    </div>
  );
}
ProjectList.propTypes = {
  projectItem: propTypes.array,
  addTaskToProject:propTypes.func,
};
