import React from 'react';
import {
  render, fireEvent, waitFor,
} from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { Header } from '.';

jest.mock('react-router-dom', () => ({
  // @ts-ignore
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('mobile', () => {
    beforeEach(() => {
      // matches mobile
      window.matchMedia('(max-width: 599px)');
    });

    it('should open the drawer on click and display the navigation items', async () => {
      // eslint-disable-next-line max-len
      const { getByText, getAllByText, getAllByRole } = render(<MemoryRouter><Header /></MemoryRouter>);

      expect(getByText('TNY Tech Test')).toBeInTheDocument();

      const [menuButton] = getAllByRole('button');

      fireEvent.click(menuButton);

      await waitFor(() => getAllByText('Feed'));

      // there are two elements rendered by @material-ui/core for each button
      expect(getAllByText('Feed')[0]).toBeInTheDocument();
      expect(getAllByText('Music')[0]).toBeInTheDocument();
      expect(getAllByText('Sport')[0]).toBeInTheDocument();
      expect(getAllByText('Authors')[0]).toBeInTheDocument();
    });
  });

  describe('desktop', () => {
    beforeEach(() => {
      // matches desktop
      window.matchMedia('(min-width: 600px)');
    });

    it('should render the navigation items', () => {
      const { getByText } = render(<MemoryRouter><Header /></MemoryRouter>);

      expect(getByText('TNY Tech Test')).toBeInTheDocument();

      expect(getByText('Feed')).toBeInTheDocument();
      expect(getByText('Music')).toBeInTheDocument();
      expect(getByText('Sport')).toBeInTheDocument();
      expect(getByText('Authors')).toBeInTheDocument();
    });
  });
});
