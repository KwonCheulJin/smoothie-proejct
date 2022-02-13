import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

import { Router, useNavigate } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PageHeader } from './index';

describe('<PageHeader />', () => {
  it('renders componect correctly ', () => {
    const navigator = createMemoryHistory();
    navigator.push('/');

    const { container } = render(
      <Router location={'/'} navigator={navigator}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
    const goBack = screen.queryByText('돌아가기');
    expect(goBack).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders component correctly with /add URL', () => {
    const navigator = createMemoryHistory();
    navigator.push('/');

    render(
      <Router location={'/add'} navigator={navigator}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('할 일 추가');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with /detail/:id URL', () => {
    const navigator = createMemoryHistory();
    navigator.push('/');

    render(
      <Router location={'/detail/1'} navigator={navigator}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('할 일 상세');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });
  it('renders component correctly with NotFound', () => {
    const navigator = createMemoryHistory();
    navigator.push('/');

    render(
      <Router location={'/not_found'} navigator={navigator}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('에러');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });
  // it('renders component correctly with goBack link', () => {
  //   const navigator = createMemoryHistory();
  //   navigator.push('/');

  //   render(
  //     <Router location={'/not_found'} navigator={navigator}>
  //       <PageHeader />
  //     </Router>,
  //   );

  //   const goBack = screen.getByText('돌아가기');
  //   userEvent.click(goBack);

  //   const label = screen.getByText('할 일 목록');
  //   expect(label).toBeInTheDocument();
  //   expect(goBack).not.toBeInTheDocument();
  // });
});
