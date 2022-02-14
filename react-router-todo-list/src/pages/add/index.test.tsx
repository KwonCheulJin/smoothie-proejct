import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import 'jest-styled-components';

import { Add } from './index';

describe('<Add />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/add');

    const { container } = render(
      <Router location={'/'} navigator={history}>
        <Add />
      </Router>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
