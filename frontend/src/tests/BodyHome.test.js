import React from 'react';

import { render } from '@testing-library/react';

import BodyHome from '../components/BodyHome';

describe('Tests for BodyHome component', () => {
  it('testing the list of series/movies', async () => {
    const { getAllByText, getByTestId } = render(<BodyHome />);
  });
})