import React from "react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

// const removeTodoHandler = async (e: any) => {
//   // stop refreshing
//   await e.preventDefault();
//   props.setTodos(() => {});

//   await props.setInputText("");
// };

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

      <button
        className="delete"
        onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
      >
        remove
      </button>
    </div>
  );
};

export default Todo;
