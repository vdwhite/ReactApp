import React, { useState } from "react";
import { TodoList } from "./components/todoList.component";
import { TodoForm } from "./components/todoForm.component";

const initialTodoItems: Array<Todo> = [
  { text: "sleep", completedStatus: false },
  { text: "movies", completedStatus: true },
];

const App = () => {
  const [todoItems, setTodos] = useState(initialTodoItems);
  const todoToggles: TodoToggle = (selectedTodoItem) => {
    const newTodos = todoItems.map((todoItem: Todo) => {
      if (todoItem === selectedTodoItem) {
        return {
          ...todoItem,
          completedStatus: !todoItem.completedStatus,
        };
      }
      return todoItem;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() &&
      setTodos([...todoItems, { text: newTodo, completedStatus: false }]);
  };
  return (
    <div>
      <TodoList todoItems={todoItems} todoToggle={todoToggles} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
