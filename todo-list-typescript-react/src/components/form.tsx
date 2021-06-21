import React from "react";
import { Button, Dropdown } from "semantic-ui-react";
import TodoList from "./todoList";
// Function passed in from props
const Form = (props: any) => {
  // Functions
  const inputTextHanlder = (e: any) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = async (e: any) => {
    const newTodoId: number = Math.floor(Math.random() * 999 + 1);
    const newTodoItem = {
      text: props.inputText,
      completedStatus: false,
      id: newTodoId,
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem),
    };

    const response = fetch(
      "https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos",
      requestOptions,
    );
    // stop refreshing
    console.log(response);

    await e.preventDefault();
    props.setTodos([...props.todos, newTodoItem]);

    await props.setInputText("");
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTextHanlder}
        type="text"
        className="todo-input"
      />
      <Button
        primary
        className="todo-button"
        type="submit"
        onClick={submitTodoHandler}
      >
        {"Add Todo"}
      </Button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all"> All </option>
          <option value="completed"> Completed </option>
          <option value="uncompleted"> Uncompleted </option>
        </select>
      </div>
      <TodoList
        todos={props.todos}
        updateTodoCompleted={props.updateTodoCompleted}
        removeTodoItem={props.removeTodoItem}
      />
    </form>
  );
};

export default Form;
