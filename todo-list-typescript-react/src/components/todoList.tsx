import React from "react";
import Todo from "./todo";
const TodoList = (props: any) => {
  type ITodoProps = {
    text: string;
    id: number;
    completedStatus: boolean;
  };


  const { todos = [], updateTodoCompleted, removeTodoItem } = props;

              /*If there is no todos, we return empty div to prevent crash*/
  if(todos && todos.length!==0){
    return (      
        <div className='ui text container todo-list' data-testid='todo-list'>
           <ul>           
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
                      key={index}
                      testId={`todo-list-item`}
                      />
                  );
  
              })}
          </ul>
        </div>
    );
  }
  return (<div />);
};


export default TodoList;
