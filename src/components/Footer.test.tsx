import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);

    // Check for social icons and links
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);

    // Check for copyright text
    expect(screen.getByText("Young Jun Joo™")).toBeInTheDocument();
    expect(screen.getByText(/All Rights Reserved\./)).toBeInTheDocument();

    const linkedinIconLabel = screen.getByTestId("Linkedin-label");
    expect(linkedinIconLabel).toBeInTheDocument();

    const githubIconLabel = screen.getByTestId("Github-label");
    expect(githubIconLabel).toBeInTheDocument();

    const emailIconLabel = screen.getByTestId("Email-label");
    expect(emailIconLabel).toBeInTheDocument();

    const twitterIconLabel = screen.getByTestId("Twitter-label");
    expect(twitterIconLabel).toBeInTheDocument();
  });
});
