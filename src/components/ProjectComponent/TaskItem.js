import React from "react";
import propTypes from "prop-types";


export default function TaskItem({ task }) {
  return (
    <div className="container">
      {task.name}
    </div>
  );
}
TaskItem.propTypes = {
  task: propTypes.object,
};
