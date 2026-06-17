// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainPeak title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainPeak/i);
    expect(titleElement).toBeInTheDocument();
});
