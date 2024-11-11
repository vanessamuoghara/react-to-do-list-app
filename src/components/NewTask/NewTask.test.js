import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTask from './NewTask'; 

describe('NewTask Component', () => {
  test('changes class name on checkbox click', () => {
    const { rerender } = render(<NewTask id={1} text="Test Task" />);

    const taskElement = screen.getByText('Test Task').closest('li');
    expect(taskElement).toHaveClass('incomplete');

    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

   
    rerender(<NewTask id={1} text="Test Task" />);
    expect(taskElement).toHaveClass('completed');

    
    fireEvent.click(checkbox);

    rerender(<NewTask id={1} text="Test Task" />);
    expect(taskElement).toHaveClass('incomplete');
  });
});