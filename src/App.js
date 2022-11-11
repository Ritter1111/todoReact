import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Container } from "react-bootstrap";
import Button from "./components/Button/Button";
import InputTask from "./components/InputTask/InputTask";

function App() {
  const [todo, setTodo] = useState([
    // {
    //   id: 1,
    //   title: "first todo",
    //   status: false,
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
  const [showed, setShowed] = useState(false);
  return (
    <Container>
      <Header />
      <Button setShowed={setShowed} />
      {showed ? <InputTask /> : null}
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}
export default App;
