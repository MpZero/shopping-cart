import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, test, expect } from "vitest";

import Card from "../card/Card";

describe("Render Card correctly", () => {
  test("Renders Card", () => {
    render(<Card />);
    const text = screen.getByText(/Add to Cart/i);
    expect(text).toBeInTheDocument();
  });
});
