import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './NewTask';

describe('TodoList Component', () => {
    test('renders input and button', () => {
        render(<TodoList />);
        const inputElement = screen.getByRole('textbox');
        const buttonElement = screen.getByText(/add todo/i);
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
});