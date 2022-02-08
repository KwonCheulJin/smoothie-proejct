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
});
