import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders without errors", () => {
    render(<App />);
    // No assertions needed, we're testing that the component renders without errors
  });

  it("renders all the sections", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app-1")).toBeInTheDocument();
    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByTestId("home")).toBeInTheDocument();
    expect(getByTestId("about")).toBeInTheDocument();
    expect(getByTestId("skills")).toBeInTheDocument();
    expect(getByTestId("work")).toBeInTheDocument();
    expect(getByTestId("footer")).toBeInTheDocument();
  });

  // You can add more specific tests for interactions, routing, etc.
});
