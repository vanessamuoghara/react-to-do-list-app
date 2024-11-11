import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    test('renders input and button', () => {
        render(<TodoList />);
        const inputElement = screen.getByRole("textbox", { name: /taskinput/i });
        const buttonElement = screen.getByText('+');
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
});