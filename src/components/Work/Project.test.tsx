import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Project component", () => {
  it("renders correctly with provided props", () => {
    const props = {
      title: "Test Project",
      demoLink: "https://example.com/demo",
      codeLink: "https://example.com/code",
    };

    render(<Project {...props} />);

    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    const demoLink = screen.getByRole("link", { name: "Demo" });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute("href", props.demoLink);

    const codeLink = screen.getByRole("link", { name: "Code" });
    expect(codeLink).toBeInTheDocument();
    expect(codeLink).toHaveAttribute("href", props.codeLink);
  });

  it("opens demo link in a new tab", () => {
    const props = {
      title: "Test Project",
      demoLink: "https://example.com/demo",
      codeLink: "https://example.com/code",
    };

    render(<Project {...props} />);

    const demoLink = screen.getByRole("link", { name: "Demo" });
    expect(demoLink).toHaveAttribute("target", "_blank");
    expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("opens code link in a new tab", () => {
    const props = {
      title: "Test Project",
      demoLink: "https://example.com/demo",
      codeLink: "https://example.com/code",
    };

    render(<Project {...props} />);

    const codeLink = screen.getByRole("link", { name: "Code" });
    expect(codeLink).toHaveAttribute("target", "_blank");
    expect(codeLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
