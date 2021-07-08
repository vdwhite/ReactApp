import React from "react";
import { Button, Checkbox } from "semantic-ui-react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

const Todo = (props: any) => {
  return (
    <div className="ui bulleted list">
      <div className="ui left aligned container">
        <div className="item">
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
              negative
              className="edit"
              onClick={(e) => props.editTodoItem(e, props.itemIndex)}
            >
              EDIT
            </Button>
          </div>
          <div className="ui left aligned container">
            <input
              type="checkbox"
              name="example"
              onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
            />
            <label>Check</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
