import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faMarker, faSave } from '@fortawesome/free-solid-svg-icons';


function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState(" ");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }
  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div className="container">
      {todo.map((item) => (
        <div key={item.id} className='listItem'>
          {edit == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} className='add-task_input' />
            </div>
          ) : (
            <div> {item.title} </div>
          )}
          {edit == item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)} className='btn'><FontAwesomeIcon icon={faSave}/></button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)} className='btn'><FontAwesomeIcon icon={faTrash} /></button>
              <button onClick={() => editTodo(item.id, item.title)} className='btn'>
              <FontAwesomeIcon icon={faMarker}/>
              </button>
              <button onClick={() => statusTodo(item.id)} className='btn'><FontAwesomeIcon icon={faCheck}/></button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;

TodoList.propTypes = {
  todo: propTypes.array,
  setTodo: propTypes.function,
};
