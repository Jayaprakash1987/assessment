import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Advanced from "../components/Advanced";

describe("Advanced", () => {
  it("should update input string on change", () => {
    const { getByLabelText } = render(<Advanced />);
    const input = getByLabelText("Input string");
    fireEvent.change(input, { target: { value: "101" } });
    expect(input.value).toBe("101");
  });

  it("should calculate modulo three correctly for valid input", () => {
    const { getByLabelText, getByText } = render(<Advanced />);
    const input = getByLabelText("Input string");
    const button = getByText("Calculate");
    fireEvent.change(input, { target: { value: "101" } });
    fireEvent.click(button);
    const output = getByText("Output value: 2");
    expect(output).toBeInTheDocument();
  });

  it("should display error message for invalid input", () => {
    const { getByLabelText, getByText } = render(<Advanced />);
    const input = getByLabelText("Input string");
    const button = getByText("Calculate");
    fireEvent.change(input, { target: { value: "12" } });
    fireEvent.click(button);
    const output = getByText("Output value:");
    expect(output).toBeInTheDocument();
    console.error = jest.fn(); // Suppress console error message
    expect(console.error).toHaveBeenCalledWith("Invalid symbol: 2");
  });
});
