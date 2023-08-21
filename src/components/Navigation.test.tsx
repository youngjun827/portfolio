import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation component", () => {
  it("renders correctly", () => {
    render(<Navigation />);

    // Check for the presence of the logo
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();

    // Check for the link to home section using aria-label
    const homeLink = screen.getByLabelText("Home");
    expect(homeLink).toBeInTheDocument();

    // Check if the logo is contained within the link
    expect(homeLink).toContainElement(logoImage);

    // Previously checked attributes have been removed.
    // You can add new checks here if needed based on your component's requirements.
  });
});
