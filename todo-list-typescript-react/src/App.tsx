import React, { useEffect, useState } from "react";
import Form from "./components/form";
import "./css/todoItem.css";
import "semantic-ui-css/semantic.min.css";

type ITodoProps = {
  text: string;
  id: number;
  completedStatus: boolean;
};

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState<ITodoProps[]>([]);

  const updateTodoCompleted = (e: any, index: number) => {
    let newTodo: any = todos[index];
    newTodo.completedStatus = !newTodo.completedStatus;
    let newTodos: any = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
    e.preventDefault();
  };

  const removeTodoItem = (e: any, index: number) => {
    let newTodos: any = [...todos];

    const DELETE_ITEM_ID: number = newTodos[index].id;

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodos[index]),
    };
    newTodos.splice(index, 1);
    const response = fetch(
      "https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos",
      requestOptions,
    );
    setTodos(newTodos);
    console.log(newTodos);
    e.preventDefault();
  };

  const props = {
    inputText: inputText,
    setInputText: setInputText,
    todos: todos,
    setTodos: setTodos,
    updateTodoCompleted,
    removeTodoItem,
  };

  useEffect(() => {
    async function getAllItemsFromEndPoints() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos",
        requestOptions,
      );
      const data = await response.json();
      if (todos.length === 0) {
        setTodos(data);
      }
    }
    getAllItemsFromEndPoints();
  });

  return (
    <div className="App">
      <div className="ui center aligned fluid container">
        <header>
          <h1>Todo List React</h1>
        </header>
        <Form {...props} />
      </div>
    </div>
  );
}

export default App;
