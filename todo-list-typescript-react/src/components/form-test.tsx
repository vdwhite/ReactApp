import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./form";
// Function passed in from props

describe("Form", () => {
  it("should show add todo button be disabled by default", async () => {
    render(<Form />);
    const addTodoButton = screen.getByText("Add Todo");
    expect(addTodoButton.closest("button")).toBeInTheDocument();
    console.log(addTodoButton.closest("button")?.attributes);
    expect(addTodoButton.closest("button")).toHaveAttribute("disabled");
  });

  it("should show add todo button be enabled when typing non-empty string", async () => {
    render(<Form />);
    const addTodoButton = screen.getByText("Add Todo");
    expect(addTodoButton.closest("button")).toBeInTheDocument();
    const inputField = screen.getByPlaceholderText("What I am going to do...");
    expect(inputField).toBeInTheDocument();
  });

  //   it("should show add todo button be disabled by default", async () => {
  //     render(<Form />);
  //     const addTodoButton = screen.getByText("Add Todo");
  //     expect(addTodoButton.closest("button")).toBeInTheDocument();
  //     console.log(addTodoButton.closest("button")?.attributes);
  //     expect(addTodoButton.closest("button")).toHaveAttribute("disabled");
  //   });
});
