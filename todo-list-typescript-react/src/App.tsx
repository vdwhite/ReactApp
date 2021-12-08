import React, { useEffect, useState } from "react";
import Form from "./components/form";
import "./css/todoItem.css";
import "semantic-ui-css/semantic.min.css";

type ITodoProps = {
  text: string;
  id: number;
  completedStatus: boolean;
};


async function fetchData(uri:string, requestOptions:any){
    try {
        const RESPONSE  = await fetch(
            uri,
            requestOptions,
        )
        return RESPONSE;
    } catch (e){
        console.error(e);
        return null;
    }
}

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<ITodoProps[]>([]);
  const REQUEST_URI: string ="https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos";

  const updateTodoCompleted =  async (e: any, index: number) => {
    let newTodo: any = todos[index];
    newTodo.completedStatus = !newTodo.completedStatus;
    let newTodos: any = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);

    const REQUEST_OPTIONS = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodos[index]),
      };


    fetchData(REQUEST_URI, REQUEST_OPTIONS);

    e.preventDefault();
  };

  const removeTodoItem = async (e: any, index: number) => {
    let newTodos: any = [...todos];


    const REQUEST_OPTIONS = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodos[index]),
      };

    newTodos.splice(index, 1);
    fetchData(REQUEST_URI, REQUEST_OPTIONS)

    setTodos(newTodos);
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

      const REQUEST_OPTIONS = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const RESPONSE:any = await fetchData(REQUEST_URI, REQUEST_OPTIONS);
      let data = null;
      try {
        data = await RESPONSE.json();
      } catch (e) {
        console.error(e);
      }

      if (todos && todos.length === 0) {
        setTodos(data);
      }
    }
    getAllItemsFromEndPoints();
  });

  return (
    <div className="App">
      <div className="ui center aligned header">
        <header>
          <h1>Todo List React</h1>
        </header>
        <Form {...props} />
      </div>
    </div>
  );
}

export default App;
