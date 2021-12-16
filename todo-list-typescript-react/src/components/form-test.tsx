import {render, screen } from "@testing-library/react";
import React from "react";
import Form from "./form";


describe("Form", () => {

  it("should show add todo button be disabled by default", async () => {
    render(<Form />);
    expect(screen.getByText(/Add Todo/i).closest('button')).toBeDisabled();
  });

  it("should show add todo button be disabled if input text is empty string", async () => {
    render(<Form inputText={'     '}/>);
    expect(screen.getByText(/Add Todo/i).closest('button')).toBeDisabled();
  });

  it("should show add todo button be enabled if input text is not empty string", async () => {
    render(<Form inputText={'123'}/>);
    expect(screen.getByText(/Add Todo/i).closest('button')).not.toBeDisabled();
  });
});
