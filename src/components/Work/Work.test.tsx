import React from "react";
import { render, screen } from "@testing-library/react";
import Work from "./Work";

describe("Work component", () => {
  it("renders correctly", () => {
    render(<Work />);

    // Check for the text content in the rendered component
    const headerText = screen.getByText("Work");
    expect(headerText).toBeInTheDocument();

    const subheaderText = screen.getByText("Check out some of my recent work");
    expect(subheaderText).toBeInTheDocument();

    // Check if the project title is rendered
    const projectTitle = screen.getByText("UW GitHub Finder");
    expect(projectTitle).toBeInTheDocument();

    // Check if project demo and code links are rendered and have the correct URLs
    const demoLink = screen.getByRole("link", { name: "Demo" });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute(
      "href",
      "https://uwaterloo-github-finder.netlify.app/"
    );

    const codeLink = screen.getByRole("link", { name: "Code" });
    expect(codeLink).toBeInTheDocument();
    expect(codeLink).toHaveAttribute(
      "href",
      "https://github.com/youngjun827/uwaterloo-github-finder"
    );
  });
});
