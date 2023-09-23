import React from 'react';
import {render, screen} from '@testing-library/react';
import Register from './Register';

test('renders learn react link', () => {
    render(<Register/>);
    const linkElement = screen.getByText(/Sign in to your account/i);
    expect(linkElement).toBeInTheDocument();
});
