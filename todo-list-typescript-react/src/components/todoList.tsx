import React from "react";
import Todo from "./todo";
const TodoList = (props: any) => {
  type ITodoProps = {
    text: string;
    id: number;
    completedStatus: boolean;
  };


  const { todos = [], updateTodoCompleted, removeTodoItem } = props;

  return (
      <div className='ui text container todo-list'>
         <ul>           
            {todos?todos.map((item: ITodoProps, index: number) => {
                const { text, id, completedStatus } = item;
                return (
                    <Todo
                    text={text}
                    id={id}
                    completed={completedStatus}
                    itemIndex={index}
                    updateTodoCompleted={updateTodoCompleted}
                    removeTodoItem={removeTodoItem}
                    key={index}
                    />
                );
            /*If there is no todos, we return empty div to prevent crash*/
            }):<div />}
        </ul>
      </div>
  );
};

export default TodoList;
