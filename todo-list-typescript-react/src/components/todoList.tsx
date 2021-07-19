import React from "react";
import Todo from "./todo";
const TodoList = (props: any) => {
  type ITodoProps = {
    text: string;
    id: number;
    completedStatus: boolean;
  };

  type ITodoListProps = {
    todos: ITodoProps[];
    updateTodoCompleted(index: number): void;
    removeTodoItem(index: number): void;
    editTodoItem(index: number): void;
  };

  const {
    todos = [],
    updateTodoCompleted,
    removeTodoItem,
    editTodoItem,
  } = props;

  return (
    <div className="ui grid centered one column ui center aligned ">
      <ul
        className={
          props.todos.length > 0
            ? `ui grid centered one column center aligned border`
            : `ui grid centered one column center aligned`
        }
      >
        {todos.map((item: ITodoProps, index: number) => {
          const { text, id, completedStatus } = item;
          return (
            <Todo
              text={text}
              id={id}
              completed={completedStatus}
              itemIndex={index}
              updateTodoCompleted={updateTodoCompleted}
              removeTodoItem={removeTodoItem}
              editTodoItem={editTodoItem}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
