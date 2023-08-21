import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { skillsData } from "../data/skillsData";

describe("Skills component", () => {
  it("renders correctly", () => {
    render(<Skills />);

    // Check for section header
    const sectionHeader = screen.getByText("Skills");
    expect(sectionHeader).toBeInTheDocument();

    // Check for section subheader
    const subheader = screen.getByText(
      "These are the technologies I've worked with"
    );
    expect(subheader).toBeInTheDocument();

    // Check for skill images and labels
    const skillElements = screen.getAllByRole("img");
    expect(skillElements.length).toBe(skillsData.length);

    skillsData.forEach((skill, index) => {
      const skillImage = skillElements[index];
      expect(skillImage).toBeInTheDocument();
      expect(skillImage).toHaveAttribute("src", skill.image);
      expect(skillImage).toHaveAttribute("alt", `${skill.label} icon`);

      const skillLabel = screen.getByText(skill.label);
      expect(skillLabel).toBeInTheDocument();
    });
  });
});
