import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { describe, expect, test } from "vitest";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "../homepage/Homepage";
// import Homepage from "../homepage/Homepage";
// import Cart from "../cart/Cart";

describe("Render Navbar correctly", () => {
  test("Renders Navbar", () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    // screen.debug();

    const home = screen.getByText("Home");
    const cart = screen.getByText("Cart");

    expect(home).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
  test("Renders Homepage by default using <Outlet />", () => {
    render(
      <MemoryRouter initialEntries={["/homepage"]}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/homepage" element={<Homepage />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    screen.debug();
    //Check Navbar first
    const home = screen.getByRole("link", { name: /home/i });
    const cart = screen.getByRole("link", { name: /cart/i });

    expect(home).toBeInTheDocument();
    expect(cart).toBeInTheDocument();

    //Check Homepage
    const title = screen.getByText("Stylism");
    expect(title).toBeInTheDocument();
  });
});
