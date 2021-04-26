import React from "react";
import Todo from "./todo";
const TodoList = (props: any) => {
  type ITodoProps = {
    text: string;
    id: number;
    completed: boolean;
  };

  type ITodoListProps = {
    todos: ITodoProps[];
    updateTodoCompleted(index: number): void;
  };

  const { todos = [], updateTodoCompleted } = props;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((item: ITodoProps, index: number) => {
          const { text, id, completed } = item;
          return (
            <Todo
              text={text}
              id={id}
              completed={completed}
              itemIndex={index}
              updateTodoCompleted={updateTodoCompleted}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
