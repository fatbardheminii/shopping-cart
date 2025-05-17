import { render, screen } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import ProductCard from "../ProductCard";
import { CartProvider } from "../../context/CartContext";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  image: "test-image.jpg",
};

it("renders product card", () => {
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("$29.99")).toBeInTheDocument();
});
