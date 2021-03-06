import React, { useState, FormEvent } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  addTodo,
}) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Todo Item"
        value={newTodo}
        onChange={handleChange}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Add todo item
      </button>
    </form>
  );
};
