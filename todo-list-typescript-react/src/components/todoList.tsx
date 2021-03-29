import React from "react";
import Todo from "./todo";
const TodoList = (todos: any) => {
  console.log("todolist length: " + todos.length);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {console.log("show me: " + todos.length)}
        {todos.length > 0
          ? todos.maps((item: any) => {
              return <Todo props={item} />;
            })
          : console.log("returned empty")}
        {/* {todos.map((a: any) => (
          <Todo props={a} />
        ))} */}
      </ul>
    </div>
  );
};

export default TodoList;
