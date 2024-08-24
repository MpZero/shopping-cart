import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Cart from "../cart/Cart";

describe("Render Cart correctly", () => {
  test("Renders Cart", () => {
    render(<Cart />, { wrapper: BrowserRouter });
    screen.debug();
    const title = screen.getByText(/shopping cart/i);
    expect(title).toBeInTheDocument();
  });
});
