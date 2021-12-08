import React from "react";
import { Button } from "semantic-ui-react";
import TodoList from "./todoList";
// Function passed in from props
const Form = (props: any) => {
  // Functions
  const inputTextHandler = (e: any) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
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

    try {
      props.setTodos([...props.todos, newTodoItem]);

      props.setInputText("");

      fetch(
        "https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos",
        requestOptions,
      );

      e.preventDefault();
    } catch (e) {
      console.error(e);
    }
  };
  return (
      <div className="ui center aligned header">
        <form className="todo-list-form ">
            <input
                value={props.inputText}
                onChange={inputTextHandler}
                type="text"
                className="ui input todo-input"
                placeholder="What I am going to do..."
            />
            
            <Button
                primary
                disabled={!(props.inputText && props.inputText.trim())}
                className={
                props.inputText && props.inputText.trim()
                    ? "ui blue todo-button"
                    : "ui inverted blue todo-button"
                }
                type="submit"
                onClick={submitTodoHandler}
            >
                {"Add Todo"}
            </Button>

            <TodoList
                todos={props.todos}
                updateTodoCompleted={props.updateTodoCompleted}
                removeTodoItem={props.removeTodoItem}
                className="ui text container"
            />
        </form>
    </div>
  );
};

export default Form;
