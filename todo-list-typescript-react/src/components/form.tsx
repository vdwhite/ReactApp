import React from "react";
import { Button, Dropdown } from "semantic-ui-react";
import TodoList from "./todoList";
// Function passed in from props
const Form = (props: any) => {
  // Functions
  const inputTextHandler = (e: any) => {
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
      method: "POST",
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
          <input
            value={props.inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />

          <Button
            primary
            disabled={!props.inputText.trim()}
            className={!props.inputText.trim()?"ui blue todo-button":"ui inverted blue todo-button"}
            type="submit"
            onClick={submitTodoHandler}

          >
            {"Add Todo"}
          </Button>
      <TodoList
        todos={props.todos}
        updateTodoCompleted={props.updateTodoCompleted}
        removeTodoItem={props.removeTodoItem}
        className = 'ui text container'
      />
    </form>
  );
};

export default Form;
