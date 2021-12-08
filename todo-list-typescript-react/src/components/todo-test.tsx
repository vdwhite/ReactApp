import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "./todoList";

describe("Todo", () => {
  it("fire the remove function when clicking remove button", async () => {
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

  it("fire the check function when clicking check button", async () => {
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
