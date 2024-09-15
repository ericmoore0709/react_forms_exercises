import { expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

it('should not smoke', () => {
    render(<Todo id="1" task="Test task" removeTodo={vi.fn()} />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<Todo id="1" task="Test task" removeTodo={vi.fn()} />);
    expect(asFragment()).toMatchSnapshot();
});

it('should fire removeTodo when X is clicked', () => {
    const removeMock = vi.fn();
    const { container } = render(<Todo id="1" task="Test task" removeTodo={removeMock} />);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(removeMock).toBeCalledWith('1');
});
