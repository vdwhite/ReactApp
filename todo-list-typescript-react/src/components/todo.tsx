import React from "react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

const Todo = (props: any) => {
  return (
    <div className={props.completed ? `todoSelected` : `todoNotSelected`}>
      <li className="todo-item">{props.text}</li>
      <button
        className="check"
        onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
      >
        check
      </button>
    </div>
  );
};

export default Todo;
