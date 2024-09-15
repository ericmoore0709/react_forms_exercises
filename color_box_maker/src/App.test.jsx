import { expect, it } from 'vitest'
import { render } from '@testing-library/react';
import App from './App';

it('should not smoke', () => {
    render(<App />);
});

it('should match snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});