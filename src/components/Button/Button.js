import React from "react";
import propTypes from "prop-types";

export default function Button({ showed, setShowed }) {
  const onClick = () => {
    setShowed(true);
  };
  return <div>{!showed && <button onClick={onClick}>Add Project</button>}</div>;
}
Button.propTypes = {
  showed: propTypes.bool,
  setShowed: propTypes.func,
};
