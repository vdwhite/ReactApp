import React from "react";
import { Button } from "semantic-ui-react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

const Todo = (props: any) => {
  return (
    <div className="item border">
      <div className={props.completed ? `todoSelected` : `todoNotSelected`}>
        <div className="todo-item">
          <span
            className={props.completed ? `todoSelected` : `todoNotSelected`}
          >
            {props.text}
          </span>

          <Button
            negative
            className="delete"
            onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
          >
            <span>REMOVE </span>
            <i className="trash alternate outline icon"></i>
          </Button>

          <Button
            className="check"
            onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
          >
            <i className="check icon"></i>
            <span>CHECK</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
