import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders employees list table', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/employees list/i);
  expect(linkElement).toBeInTheDocument();
});
