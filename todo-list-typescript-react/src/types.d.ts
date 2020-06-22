type Todo = {
  text: string;
  completedStatus: boolean;
};

type TodoToggle = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
