import { expect, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('should not smoke', () => {
    render(<NewTodoForm addTodo={vi.fn()} />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<NewTodoForm addTodo={vi.fn()} />);
    expect(asFragment()).toMatchSnapshot();
});

it('should fire addTodo on submit', () => {
    const addMock = vi.fn();
    render(<NewTodoForm addTodo={addMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(addMock).toBeCalled();
});

it('should change task when input is changed', () => {
    render(<NewTodoForm addTodo={vi.fn()} />);
    const taskInput = screen.getByLabelText('Task');

    // change task value
    fireEvent.change(taskInput, {
        target: { value: "Test task" },
    });
    expect(taskInput.value).toBe('Test task');
});

it('should clear form data on submit', () => {
    const addMock = vi.fn();
    const { container } = render(<NewTodoForm addTodo={addMock} />);

    const taskInput = screen.getByLabelText('Task');

    // change task
    fireEvent.change(taskInput, {
        target: { value: "New task" },
    });

    fireEvent.click(container.querySelector('button'));
    expect(taskInput.value).toBe('');
});
