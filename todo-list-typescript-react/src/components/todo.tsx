import React from "react";
import { Button, Checkbox } from "semantic-ui-react";

type ITodoProps = {
  text: string;
  id: number;
  completed: boolean;
};

// const removeTodoHandler = async (e: any) => {
//   // stop refreshing
//   await e.preventDefault();
//   props.setTodos(() => {});

//   await props.setInputText("");
// };

const Todo = (props: any) => {
  return (
    <div className={props.completed ? `todoSelected` : `todoNotSelected`}>
      <li className="todo-item">{props.text}</li>
      <Checkbox
        toggle
        className="check"
        onClick={(e) => props.updateTodoCompleted(e, props.itemIndex)}
      >
        check
      </Checkbox>

      <Button
        negative
        className="delete"
        onClick={(e) => props.removeTodoItem(e, props.itemIndex)}
      >
        REMOVE
      </Button>
    </div>
  );
};

export default Todo;
