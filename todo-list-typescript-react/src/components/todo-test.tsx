import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Todo from "./todo"


const mockTodoProps = 
{
    text: "todo item",
    id: 123,
    completedStatus: false,
    updateTodoCompleted: jest.fn(),
    removeTodoItem: jest.fn()
}

describe("Todo", () => {

  it("fire the check function when clicking remove button", async () => {
    render(<Todo removeTodoItem={mockTodoProps.removeTodoItem} />);
    const todoItemRemoveButtonSelector = screen.getByText(/REMOVE/i).closest('button') as HTMLElement;
    expect(todoItemRemoveButtonSelector).toBeInTheDocument();
    fireEvent.click(todoItemRemoveButtonSelector);
    expect(mockTodoProps.removeTodoItem).toHaveBeenCalledTimes(1)
  });

  it("fire the check function when clicking check button", async () => {
    render(<Todo updateTodoCompleted={mockTodoProps.updateTodoCompleted} />);
    const todoItemCheckButtonSelector = screen.getByText(/CHECK/i).closest('button') as HTMLElement;
    expect(todoItemCheckButtonSelector).toBeInTheDocument();
    fireEvent.click(todoItemCheckButtonSelector);
    expect(mockTodoProps.updateTodoCompleted).toHaveBeenCalledTimes(1)
  });
});
