import React from "react";
import { render, screen } from "@testing-library/react";
import ModuloThree from "../components/ModuloThree";

describe("ModuloThree", () => {
  it("should return 0 for the input string '0'", () => {
    const inputString = "0";
    render(<ModuloThree inputString={inputString} />);
    const outputElement = screen.queryByText((content, element) => {
      return content.startsWith("Output value:") && content.endsWith("0");
    });
    expect(outputElement).toBeNull();
  });

  it("should return 1 for the input string '1'", () => {
    const inputString = "1";
    render(<ModuloThree inputString={inputString} />);
    const outputElement = screen.queryByText((content, element) => {
      return content.startsWith("Output value:") && content.endsWith("1");
    });
    expect(outputElement).toBeNull();
  });

  it("should return 2 for the input string '1010'", () => {
    const inputString = "1010";
    render(<ModuloThree inputString={inputString} />);
    const outputElement = screen.queryByText((content, element) => {
      return content.startsWith("Output value:") && content.endsWith("2");
    });
    expect(outputElement).toBeNull();
  });
});
