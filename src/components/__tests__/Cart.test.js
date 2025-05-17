import { render, screen } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import Cart from "../Cart";
import { CartProvider } from "../../context/CartContext";

it("renders empty cart message", () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
