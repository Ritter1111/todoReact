import React, { useState } from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheck,
//   faTrash,
//   faMarker,
//   faSave,
// } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, FormControl } from "react-bootstrap";
import TasksList from "./TasksList";

export default function ProjectComponent({ projectItem, addTaskToProject }) {
  //   const [edit] = useState(null);
  const [value, setValue] = useState(" ");

  function saveTodo() {
    // setProjectItem(uuidv4(),value);
    // console.log('fhhffj')
    addTaskToProject(projectItem.id,uuidv4(),value)
  }
  //   function deleteTodo() {
  // let newTodo = [...projectprojectItem].filter((projectItem) => projectItem.id != id);
  // setProjectprojectItem(newTodo);
  //   }
  //   function statusTodo() {
  // let newTodo = [...projectprojectItem].filter((projectItem) => {
  //   if (projectItem.id == id) {
  //     projectItem.status = !projectItem.status;
  //   }
  //   return projectItem;
  // });
  // setProjectprojectItem(newTodo);
  //   }
  //   function editTodo() {
  // setEdit(id);
  // setValue(title);
  //   }
  //   function saveTodo() {
  // let newTodo = [...projectprojectItem].map((projectItem) => {
  //   if (projectItem.id == id) {
  //     projectItem.title = value;
  //   }
  //   return projectItem;
  // });
  // setProjectprojectItem(newTodo);
  // setEdit(null);
  //   }

  return (
    <>
      {/* <div key={projectItem.id} className="listprojectItem">
      {edit == projectItem.id ? (
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="add-task_input"
          />
        </div>
      ) : (
        <div className={projectItem.status ? "close" : ""}>
          {projectItem.title}
        </div>
      )}
      {edit == projectItem.id ? (
        <div>
          <button onClick={() => saveTodo(projectItem.id)} className="btn">
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => deleteTodo(projectItem.id)} className="btn">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={() => editTodo(projectItem.id, projectItem.title)}
            className="btn"
          >
            <FontAwesomeIcon icon={faMarker} />
          </button>
          <button onClick={() => statusTodo(projectItem.id)} className="btn">
            {projectItem.status ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        </div>
      )}
    </div> */}
      <Row>
        <div className={projectItem.status ? "close" : ""}>
          {projectItem.title}
        </div>
      </Row>
      <Row>
        <Col className="addTodoForm">
          <FormControl
            className="add-task_input"
            placeholder="Enter the task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-task_button" onClick={saveTodo}>
            Save
          </button>
        </Col>
      </Row>
      <Row>
        <TasksList tasks={projectItem.tasks}/>
      </Row>
    </>
  );
}
ProjectComponent.propTypes = {
  projectItem: propTypes.object,
  addTaskToProject:propTypes.func,
};
