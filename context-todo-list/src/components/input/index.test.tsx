import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('renders components correctly', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it('renders placeholder correctly', () => {
    render(<Input placeholder="default placeholder" />);
    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });
  it('changes the data and onKeyPress work', () => {
    const handleKeyPress = jest.fn();
    render(<Input placeholder="default placeholder" onKeyPress={handleKeyPress} />);
    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
    expect(handleKeyPress).toHaveBeenCalledTimes(0);
    fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
    expect(handleKeyPress).toHaveBeenCalledTimes(1);
  });
});
