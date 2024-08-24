import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../homepage/Homepage";

describe("Render Homepage correctly", () => {
  test("Renders Homepage", () => {
    render(<Homepage />, { wrapper: BrowserRouter });
    // screen.debug();
    const title = screen.getByText(/stylism/i);
    expect(title).toBeInTheDocument();
  });
});
