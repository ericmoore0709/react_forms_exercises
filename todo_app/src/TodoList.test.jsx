import { expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('should not smoke', () => {
    render(<TodoList />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add a new todo when form is submitted', () => {
    const { container } = render(<TodoList />);

    // Simulate entering a task in NewTodoForm
    const taskInput = screen.getByLabelText('Task');
    fireEvent.change(taskInput, {
        target: { value: "New task" },
    });

    fireEvent.click(container.querySelector('button'));

    // Expect task to appear in the Todo list
    expect(screen.getByText('New task')).toBeInTheDocument();
});

it('should remove a todo when X is clicked', () => {
    const { container } = render(<TodoList />);

    // Simulate entering a task in NewTodoForm
    const taskInput = screen.getByLabelText('Task');
    fireEvent.change(taskInput, {
        target: { value: "Test task" },
    });

    fireEvent.click(container.querySelector('button'));

    // Click the remove button for the new task
    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    // Expect task to be removed from the list
    expect(screen.queryByText('Test task')).not.toBeInTheDocument();
});
