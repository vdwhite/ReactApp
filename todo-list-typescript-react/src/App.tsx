import React, { useState } from "react";
import { TodoList } from "./components/todoList.component";
import { TodoItem } from "./components/todoItem.component";

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
  return (
    <div>
      {
        // <TodoList todo={todoItems[0]} to/>
        <TodoList todoItems={todoItems} todoToggle={todoToggles} />
      }
    </div>
  );
};

export default App;
