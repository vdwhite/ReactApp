import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "./todoList";

describe("TodoList", () => {
  it("should render the component if todo list is not empty", async () => {
    const mockTodos = [
      {
        text: "I need to eat breakfast",
        id: 123,
        completedStatus: false,
      },
      {
        text: "Maybe some breakfast burritos",
        id: 234,
        completedStatus: true,
      },
    ];
    render(<TodoList todos={mockTodos} />);
    expect(screen.getByText(/^I need to eat breakfast$/i)).toBeInTheDocument();
    expect(
      screen.getByText(/^Maybe some breakfast burritos$/i),
    ).toBeInTheDocument();
  });

  it("should not render the component if todo list is empty", async () => {
    render(<TodoList todos={[]} />);
    const todoListSelector = screen.queryByTestId(`todo-list`);
    expect(todoListSelector).not.toBeInTheDocument();
  });
});
