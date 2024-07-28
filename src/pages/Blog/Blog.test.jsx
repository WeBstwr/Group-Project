import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Blog from "./Blog";

describe("Blog component", () => {
  it("renders the heading", () => {
    render(<Blog />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("UI Interactions of the Week");
  });

  it("renders the date", () => {
    render(<Blog />);

    const date = screen.getByText(/12 feb 2019/i);
    expect(date).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Blog />);

    const subtitle = screen.getByText(/Express, Handlebars/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("renders the paragraph", () => {
    render(<Blog />);

    const paragraph = screen.getByText(
      /Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint/i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
