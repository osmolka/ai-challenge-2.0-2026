import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders leaderboard heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /leaderboard/i })).toBeInTheDocument();
});
