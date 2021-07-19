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

    await e.preventDefault();
    props.setTodos([...props.todos, newTodoItem]);

    await props.setInputText("");
  };
  return (
    <form>
      <div className="ui grid center aligned">
        <div className="sixteen wide mobile eight wide tablet three wide computer column">
          <input
            value={props.inputText}
            onChange={inputTextHanlder}
            type="text"
            className="todo-input"
          />
        </div>

        <div className="sixteen wide mobile eight wide tablet three wide computer column">
          <Button
            primary
            className="todo-button"
            type="submit"
            onClick={submitTodoHandler}
          >
            {"Add Todo"}
          </Button>
        </div>
      </div>
      <TodoList
        todos={props.todos}
        updateTodoCompleted={props.updateTodoCompleted}
        removeTodoItem={props.removeTodoItem}
        editTodoItem={props.editTodoItem}
      />
    </form>
  );
};

export default Form;
