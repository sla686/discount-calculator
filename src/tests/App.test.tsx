import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders clients heading", () => {
  render(<App />);
  const clients = screen.getByRole("heading", { name: /clients/i });
  expect(clients).toBeInTheDocument();
});

test("renders products heading", () => {
  render(<App />);
  const products = screen.getByRole("heading", { name: /products/i });
  expect(products).toBeInTheDocument();
});

test("renders criteria heading", () => {
  render(<App />);
  const criteria = screen.getByRole("heading", { name: /criteria/i });
  expect(criteria).toBeInTheDocument();
});

test("renders result heading", () => {
  render(<App />);
  const result = screen.getByRole("heading", { name: /result/i });
  expect(result).toBeInTheDocument();
});
