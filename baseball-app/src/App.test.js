import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('Display component rendered', () => {
  const container = render(<App />);
  container.findByText(/STRIKES/);
});
