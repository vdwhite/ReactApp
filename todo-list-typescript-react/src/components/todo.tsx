import React from "react";
import { Button, Checkbox } from "semantic-ui-react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

const Todo = (props: any) => {
  return (
    <div className="item border">
      <div className={props.completed ? `todoSelected` : `todoNotSelected`}>
        <div
          className="todo-item"
          onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
        >
          {props.text}
        </div>
        <input className="ui hidden" type="text" />

        <Button
          negative
          className="delete"
          onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
        >
          REMOVE
        </Button>

        <Button
          className="edit"
          onClick={(e) => props.editTodoItem(e, props.itemIndex)}
        >
          EDIT
        </Button>

        <Button
          className="edit"
          onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
        >
          CHECK
        </Button>
      </div>
    </div>
  );
};

export default Todo;
