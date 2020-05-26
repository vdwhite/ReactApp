import React from "react";
import "../css/todoItem.css";

interface TodoItemProps {
  todo: Todo;
  todoToggle: TodoToggle;
}

export const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  todo,
  todoToggle,
}) => {
  return (
    <li>
      <label className={todo.completedStatus ? "completed" : undefined}>
        <input
          type="checkbox"
          checked={todo.completedStatus}
          onChange={() => todoToggle(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
