import React, { useState } from "react";
import propTypes from "prop-types";
import Button from "../Button/Button";
import InputTask from "../InputTask/InputTask";

export default function AddProject({ setProjectItem }) {
  const [showed, setShowed] = useState(false);

  return (
    <>
    <div className="add-project-element">
      <Button setShowed={setShowed} showed={showed} />
      {showed ? (
        <InputTask
          showed={showed}
          setShowed={setShowed}
          setProjectItem={setProjectItem}
        />
      ) : null}
      </div>
    </>
  );
}

AddProject.propTypes = {
  projectItem: propTypes.array,
  setProjectItem: propTypes.func,
};
