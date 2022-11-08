import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import {v4 as uuidv4} from 'uuid';

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue('')
  }
  return (
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}

export default AddTodo;
AddTodo.propTypes = {
  todo: propTypes.array,
  setTodo: propTypes.function,
};
