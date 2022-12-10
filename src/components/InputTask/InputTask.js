import React, { useRef } from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function InputTask({ setShowed, setProjectItem }) {
  const inputRef = useRef(null);
  function saveForm() {
    setShowed(false);
    setProjectItem(uuidv4(), inputRef.current.value);
  }
  return (
    <div>
       <input placeholder="Enter the task" ref={inputRef} />
       <button onClick={saveForm}>Save</button>     
    </div>
    
  );
}
InputTask.propTypes = {
  setProjectItem: propTypes.func,
  setShowed: propTypes.func,
  showed: propTypes.bool,
};
