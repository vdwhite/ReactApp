type Todo = {
  id: number;
  text: string;
  completedStatus: boolean;
};

type TodoToggle = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type Form={
  inputText:string;
  setInputText:any;
  setTodos:any;
  todos:string[];
}