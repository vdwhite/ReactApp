import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "./todoList";

describe("TodoList", () => {
  it("should render the component if todo list is not empty", async () => {
    const mockTodos = [
      {
        text: "text1",
        id: 123,
        completedStatus: false,
      },
      {
        text: "text2",
        id: 234,
        completedStatus: true,
      },
    ];
    render(<TodoList todos={mockTodos} />);
    expect(screen.getByText(/text1/i)).toBeInTheDocument();
    expect(screen.getByText(/text2/i)).toBeInTheDocument();
  });
});
