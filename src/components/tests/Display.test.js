import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

const showData = {
    name: 'test show',
    summary: 'test summary',
    seasons: [
        {
            id: 0,
            name: 'Season 1',
            episodes: []
        },
        {
            id: 1,
            name: 'Season 2',
            episodes: []
        },
    ]
};

test('renders without errors with no props', async () => { 
    render(<Display />);
});

test('renders Show component when the button is clicked ', () => { 
    render(<Display />);
    const button = screen.getByText(/Show/i);
    fireEvent.click(button);
    const show = screen.queryByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', () => { });
