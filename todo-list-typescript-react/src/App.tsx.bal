import React, { useState } from "react";
import { TodoList } from "./components/todoList.component";
import { TodoForm } from "./components/todoForm.component";



// const initialTodoItems: Array<Todo> = [
//   { text: "sleep", completedStatus: false, taskId:1},
//   { text: "eat", completedStatus: true, taskId:2},
// ];


class App extends React.Component <{},{todoItemsArray:any}> {

  constructor(props:any) {
    super(props);

    this.state = {
      todoItemsArray:[]
    };

    // this.searchMonster = this.searchMonster.bind(this);
  }

  // lifecycle method
  componentDidMount() {
    fetch("https://iu9ku2mwp2.execute-api.us-west-2.amazonaws.com/todos")
      .then((response) => response.json())
      .then((todoItems) => this.setState({ todoItemsArray: todoItems })); // use fetch to get api and put them in todo items array
  }



  render(){
    // const [todoItems, setTodos] = useState(initialTodoItems);
    let todoToggles: TodoToggle = (selectedTodoItem) => {
      const newTodos = todoItemsArray.map((todoItem: Todo) => {
        if (todoItem === selectedTodoItem) {
          return {
            ...todoItem,
            completedStatus: !todoItem.completedStatus,
          };
        }
        return todoItem;
      });
    };
    // const addTodo: AddTodo = (newTodo) => {
    //   let todoTaskId = Math.floor(Math.random()*100000);
    //   newTodo.trim() &&
    //     setTodos([...todoItems, { text: newTodo, completedStatus: false, taskId: todoTaskId }]);
    // };
  



    console.log(this.state.todoItemsArray)
    const { todoItemsArray } = this.state; //destructure
    return (
      <div>
        <TodoList todoItems={todoItemsArray} todoToggle={todoToggles} />
        {/* <TodoForm addTodo={addTodo} /> */}
      </div>
    );
  }

};

export default App;
