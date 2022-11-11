import React, { useState } from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, FormControl } from "react-bootstrap";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: false,
      },
    ]);
    setValue("");
  }
  return (
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
  );
}

export default AddTodo;
AddTodo.propTypes = {
  todo: propTypes.array,
  setTodo: propTypes.func,
};
