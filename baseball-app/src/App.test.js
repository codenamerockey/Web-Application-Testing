import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
  render(<App />);
});

test('Dashboard Component rendered', () => {
  render(<Dashboard />);
});

test('Display components rendered', () => {
  const { findByText } = render(<App />);
  findByText(/STRIKES/);
  findByText(/BALLS/);
  findByText(/FOULS/);
  findByText(/HITS/);
});

// test('Display component rendered', () => {
//   const { findByText } = render(<App />);
// });

// test('Display component rendered', () => {
//   const { findByText } = render(<App />);
// });

// test('Display component rendered', () => {
//   const container = render(<App />);
// });
