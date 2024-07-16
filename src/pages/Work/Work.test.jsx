import { render, screen } from "@testing-library/react";
import Work from "./Work";
import { describe, it, expect } from "vitest";

describe("work", () => {
  it("renders a heading", () => {
    render(<Work />);
    const heading = screen.getByRole("heading", { name: /work/i });
    expect(heading).toBeInTheDocument();
  });
});

it("renders the titles of all work cards", () => {
  render(<Work />);
  const titles = [
    "Designing Dashboards",
    "Vibrant Portraits of 2020",
    "36 Days of Malayalam type",
    "Components",
  ];
  titles.forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
it("renders all work cards", () => {
  render(<Work />);
  const workCards = screen.getAllByRole("img", { name: /workImage/i });
  expect(workCards.length).toBe(4);
});
