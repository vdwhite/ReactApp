import React from "react";
import { Button } from "semantic-ui-react";

const Todo = (props: any) => {
  return (
    <div className="ui segment todo-item-card">
      <div className="todo-item">
        <span className={props.completed ? `todoSelected` : `todoNotSelected`}>
          {`${props.text} \n`}
        </span>
        <br />
        <span
          className={
            props.completed ? `completedIndicator` : `hidden-completedIndicator`
          }
        >
          {props.completed ? `This task is completed: ${props.text}` : ``}
        </span>
        <div className="buttonWrapper">
          <Button
            negative
            className="ui  red delete"
            onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
          >
            <i className="trash alternate outline icon"></i>
            <span>REMOVE </span>
          </Button>

          <Button
            className={`ui  green ${props.completed ? `uncheck` : `check`}`}
            onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
          >
            <i className="check icon"></i>
            <span> {props.completed ? "UNCHECK" : "CHECK"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
