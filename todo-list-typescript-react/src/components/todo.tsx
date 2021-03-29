import React from "react";

const Todo = (props: any) => {
  console.log("what?");
  console.log(props);
  return (
    <div className="todo">
      <li className="todo-item">asd</li>
      <button className="check">check</button>
    </div>
  );
};

export default Todo;
