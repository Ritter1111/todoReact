import React from "react";
import propTypes from "prop-types";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks }) {
  return (
    <div className="container">
      {tasks.map((item, i) => (
        <TaskItem key={i} task={item} />
      ))}
    </div>
  );
}
TasksList.propTypes = {
  tasks: propTypes.array,
};
