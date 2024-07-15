import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero component", () => {
  it("renders hero section", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /download resume/i }),
    ).toBeInTheDocument();
  });

  it("renders hero text box with correct text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/hi, i am john, creative technologist/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Lorem ipsum dolor, sit amet consectetur adipisicing elit/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders hero profile image", () => {
    render(<Hero />);
    expect(screen.getByAltText("hero profile")).toBeInTheDocument();
  });
});
