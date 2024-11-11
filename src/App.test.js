import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading "To-do List"', () => {
  render(<App />);
  const headingElement = screen.getByText(/To-do list/i); // Match the heading text
  expect(headingElement).toBeInTheDocument(); // Assert that the heading is in the document
});