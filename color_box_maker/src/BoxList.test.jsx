import { expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

it('should not smoke', () => {
    render(<BoxList />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add a new box when form is submitted', () => {
    const { getByLabelText, getByText, getByRole } = render(<BoxList />);

    // Add a new box
    fireEvent.change(getByLabelText('Color'), { target: { value: '#0000ff' } });
    fireEvent.change(getByLabelText('Width'), { target: { value: 100 } });
    fireEvent.change(getByLabelText('Height'), { target: { value: 200 } });

    fireEvent.click(getByRole('button', { name: /add box/i }));

    // Check if the new box is rendered
    const box = getByText('X').parentElement;
    expect(box).toHaveStyle('background-color: #0000ff');
    expect(box).toHaveStyle('width: 100px');
    expect(box).toHaveStyle('height: 200px');
});

it('should remove a box when X button is clicked', () => {
    const { getByLabelText, getByRole, getAllByText } = render(<BoxList />);
    
    // Add a box first
    fireEvent.change(getByLabelText('Color'), { target: { value: '#0000ff' } });
    fireEvent.change(getByLabelText('Width'), { target: { value: 100 } });
    fireEvent.change(getByLabelText('Height'), { target: { value: 200 } });
    fireEvent.click(getByRole('button', { name: /add box/i }));
    
    // Remove the box
    const removeButton = getAllByText('X')[0];
    fireEvent.click(removeButton);
    
    expect(removeButton).not.toBeInTheDocument();
});