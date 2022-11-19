import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProjectList from "./components/ProjectList/ProjectList";
import { Container } from "react-bootstrap";
import AddProject from "./components/AddProject/AddProject";

function App() {
  const [projectItem, setProjectItem] = useState([
    // {
    //   id: 1,
    //   title: "first todo",
    //   status: false,
    //   tasks:[]
    // },
    // {
    //   id: 2,
    //   title: "second todo",
    //   status: false,
    // },
    // {
    //   id: 3,
    //   title: "third todo",
    //   status: false,
    // },
  ]);
  function newProject(id, title) {
    setProjectItem([
      ...projectItem,
      {
        id: id,
        title: title,
        status: false,
      },
    ]);
  }

  return (
    <Container>
      <Header />
      <AddProject setProjectItem={newProject} />
      <ProjectList projectItem={projectItem} />
    </Container>
  );
}
export default App;
