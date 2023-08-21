import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./NavBar";

describe("Navbar component", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    // Check for social links
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);

    // Check for link labels (textContent should match aria-label since they are the same)
    socialLinks.forEach((link) => {
      expect(link.textContent ? link.textContent.trim() : "").toEqual(
        link.getAttribute("aria-label")
      );
    });

    // Check for link URLs
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });

    // Check for link target and rel attributes
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
