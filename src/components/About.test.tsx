import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  it("renders correctly", () => {
    render(<About />);

    // Check for the text content in the rendered component
    const aboutHeaderText = screen.getByText("About");
    expect(aboutHeaderText).toBeInTheDocument();

    // Check for the presence of specific text content using RegExp and non-exact matching
    const mathBringsMeJoyText = screen.getByText(/Math brings me joy/i, {
      exact: false,
    });
    expect(mathBringsMeJoyText).toBeInTheDocument();

    const gitPushText = screen.getByText(/git push -u origin main/i, {
      exact: false,
    });
    expect(gitPushText).toBeInTheDocument();

    const introText = screen.getByText(/Hi hello!/i, { exact: false });
    expect(introText).toBeInTheDocument();

    // Check if the component structure is rendered correctly
    const aboutSection = screen.getByTestId("about");
    expect(aboutSection).toBeInTheDocument();

    const aboutGrid = screen.getByRole("grid");
    expect(aboutGrid).toBeInTheDocument();
  });
});
