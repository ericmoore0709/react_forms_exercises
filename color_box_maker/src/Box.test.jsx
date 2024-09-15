import { expect, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('should not smoke', () => {
    render(<Box />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it('should fire removeBox when X is clicked', () => {
    const removeMock = vi.fn();
    const { container } = render(<Box id='box-id' removeBox={removeMock} />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(removeMock).toBeCalledWith('box-id');
})

it('should render with default props', () => {
    const { container } = render(<Box />);
    const box = container.querySelector('.Box');
    expect(box).toHaveStyle('background-color: #ffffff');
    expect(box).toHaveStyle('width: 50px');
    expect(box).toHaveStyle('height: 50px');
});

it('should render with custom props', () => {
    const { container } = render(<Box id="box-id" color="#ff0000" width={100} height={150} />);
    const box = container.querySelector('.Box');
    expect(box).toHaveStyle('background-color: #ff0000');
    expect(box).toHaveStyle('width: 100px');
    expect(box).toHaveStyle('height: 150px');
});