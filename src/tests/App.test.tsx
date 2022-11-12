import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders clients", () => {
  render(<App />);
  const clients = screen.getByText(/clients/i);
  expect(clients).toBeInTheDocument();
});

test("renders criteria", () => {
  render(<App />);
  const criteria = screen.getByText(/criteria/i);
  expect(criteria).toBeInTheDocument();
});

test("renders products", () => {
  render(<App />);
  const products = screen.getByText(/products/i);
  expect(products).toBeInTheDocument();
});
