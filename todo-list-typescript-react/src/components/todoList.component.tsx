import React from "react";
import { TodoItem } from "./todoItem.component";

interface TodoListProps {
  todoItems: Array<Todo>;
  todoToggle: TodoToggle;
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todoItems,
  todoToggle,
}) => {
  return (
    <ul>
      {todoItems.map((todoItem) => {
        return <TodoItem todo={todoItem} todoToggle={todoToggle} />;
      })}
    </ul>
  );
};
