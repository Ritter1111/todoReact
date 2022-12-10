import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProjectList from "./components/ProjectList/ProjectList";
import { Container } from "react-bootstrap";
import AddProject from "./components/AddProject/AddProject";

function App() {
  const [projectItem, setProjectItem] = useState([
    {
      id: 1,
      title: "first todo",
      status: false,
      tasks: [
        {
          id: 1,
          name: "titujkh",
          isCompleted: false,
        },
        {
          id: 2,
          name: "tih",
          isCompleted: false,
        },
      ],
    },
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

  function addTaskToProject(projectId, taskId, taskName) {
    const projects = projectItem.map((element) => {
      if (element.id != projectId) {
        return element;
      } else {
        return {
          ...element,
          tasks: [
            ...element.tasks,
            { id: taskId, name: taskName, isCompleted: false },
          ],
        };
      }
    });

    setProjectItem(projects);
  }

  function newProject(id, title) {
    setProjectItem([
      ...projectItem,
      {
        id: id,
        title: title,
        status: false,
        tasks: [],
      },
    ]);
  }

  return (
    <Container>
      <Header />
      <ProjectList
        projectItem={projectItem}
        addTaskToProject={addTaskToProject}
      />
      <AddProject setProjectItem={newProject} />
    </Container>
  );
}
export default App;
