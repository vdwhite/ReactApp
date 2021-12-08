import React from "react";
import { Button } from "semantic-ui-react";

const Todo = (props: any) => {
  return (
    <div className="ui segment">
      <div className="todo-item">
        <span className={props.completed ? `todoSelected` : `todoNotSelected`}>
          {`${props.text} \n`}
        </span>
        <br />
        <span className={props.completed? `completedIndicator`:`hidden-completedIndicator`}>
            {props.completed? `The above task is completed`: ``}
        </span>
        <div className='buttonWrapper'>
            <Button
            negative
            className="ui inverted red delete"
            onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
            >
            <i className="trash alternate outline icon"></i>
            <span>REMOVE </span>
            </Button>

            <Button
            className={`ui inverted green ${
                props.completed ? `uncheck` : `check`
            }`}
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
