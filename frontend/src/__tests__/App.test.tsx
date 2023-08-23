import { render, screen } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import App from '../App';

// Mocking axios.get method
jest.mock('axios');
(axios.get as jest.Mock).mockResolvedValue({ data: 'your mocked data here' });

test('renders MyComponent correctly', () => {
    // Mock scrollTo function
    window.HTMLElement.prototype.scrollTo = function () { };
    // render App
    render(<App />);
    // check that the heading is there
    const heading = screen.getByText(/Töpseli/)
    expect(heading).toBeInTheDocument();
});
