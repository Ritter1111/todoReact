import React from "react";
import propTypes from "prop-types";

export default function Button({ setShowed }) {
  const onClick = () => {
    setShowed(true);
    console.log(true);
  };
  return (
    <div>
      <button onClick={onClick}>Add Task</button>
    </div>
  );
}
Button.propTypes = {
  setShowed: propTypes.func,
};
