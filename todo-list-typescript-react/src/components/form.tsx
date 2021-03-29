import React from "react";
import TodoList from "./todoList";
// Function passed in from props
const Form = (props: any) => {
  // Functions
  console.log("props");
  console.log(props);
  const inputTextHanlder = (e: any) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = async (e: any) => {
    // stop refreshing
    await e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.floor(Math.random() * 999 + 1),
      },
    ]);

    console.log("submitted");
    console.log(props.todos);
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
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        Add
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all"> All </option>
          <option value="completed"> Completed </option>
          <option value="uncompleted"> Uncompleted </option>
        </select>
      </div>
      {console.log("returned: ")}
      {console.log(props.todos)}
      {console.log("passed to:" + props.todos.length)}
      <TodoList todos={props.todos} />
    </form>
  );
};

export default Form;
