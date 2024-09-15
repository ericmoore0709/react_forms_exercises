import { expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('should not smoke', () => {
    render(<NewBoxForm addBox={vi.fn()} />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<NewBoxForm addBox={vi.fn()} />);
    expect(asFragment()).toMatchSnapshot();
});

it('should fire addBox on submit', () => {
    const addMock = vi.fn();
    render(<NewBoxForm addBox={addMock} />);

    fireEvent.change(screen.getByLabelText('Color'), { target: { value: '#ff0000' } });
    fireEvent.change(screen.getByLabelText('Width'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Height'), { target: { value: '200' } });

    fireEvent.click(screen.getByRole('button', { name: /add box/i }));
    expect(addMock).toBeCalledWith({ color: '#ff0000', width: '100', height: '200' });
});

it('should change color when color input is changed', () => {
    render(<NewBoxForm addBox={vi.fn()} />);
    const colorInput = screen.getByLabelText('Color');

    fireEvent.change(colorInput, { target: { value: '#ff0000' } });
    expect(colorInput.value).toBe('#ff0000');
});

it('should change width when width input is changed', () => {
    render(<NewBoxForm addBox={vi.fn()} />);
    const widthInput = screen.getByLabelText('Width');

    fireEvent.change(widthInput, { target: { value: '200' } });
    expect(widthInput.value).toBe('200');
});

it('should change height when height input is changed', () => {
    render(<NewBoxForm addBox={vi.fn()} />);
    const heightInput = screen.getByLabelText('Height');

    fireEvent.change(heightInput, { target: { value: '70' } });
    expect(heightInput.value).toBe('70');
});

it('should reset form after submit', () => {
    const addMock = vi.fn();
    render(<NewBoxForm addBox={addMock} />);

    fireEvent.change(screen.getByLabelText('Color'), { target: { value: '#ff0000' } });
    fireEvent.change(screen.getByLabelText('Width'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Height'), { target: { value: '200' } });

    fireEvent.click(screen.getByRole('button', { name: /add box/i }));

    expect(screen.getByLabelText('Color').value).toBe('#ffffff');
    expect(screen.getByLabelText('Width').value).toBe('50');
    expect(screen.getByLabelText('Height').value).toBe('50');
});
