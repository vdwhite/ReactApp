import React, { useState } from "react";
import Form from "./components/form";
import "./css/todoItem.css";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<ITodoProps[]>([]);

  const updateTodoCompleted = (e: any, index: number) => {
    let newTodo: any = todos[index];
    newTodo.completed = !newTodo.completed;
    let newTodos: any = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
    e.preventDefault();
  };

  const props = {
    inputText: inputText,
    setInputText: setInputText,
    todos: todos,
    setTodos: setTodos,
    updateTodoCompleted,
  };

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
