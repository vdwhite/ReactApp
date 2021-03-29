import React, { useState } from "react";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const props = {
    inputText: inputText,
    setInputText: setInputText,
    todos: todos,
    setTodos: setTodos,
  };

  console.log("length" + props.todos.length);
  return (
    <div className="App">
      <header>
        <h1>Todo List React</h1>
      </header>
      <Form {...props} />
    </div>
  );
}

export default App;
