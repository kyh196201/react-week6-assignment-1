import React from 'react';

import { render } from '@testing-library/react';

import { useParams, MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

jest.mock('react-router-dom');

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App with router', () => {
  context('with URL included /HomePage', () => {
    it('shows header and page name', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Home');
    });
  });

  context('with URL included /AboutPage', () => {
    it('shows header and page name', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('About');
    });
  });

  context('with URL included /RestaurantsPage', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants,
      }));
      useDispatch.mockImplementation(() => dispatch);
    });

    it('shows header and page name', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with URL included /RestaurantPage', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      useParams.mockReturnValue({ restaurantId: 1 });
      useSelector.mockImplementation((selector) => selector({
        regions: [],
        categories: [],
        restaurants,
        restaurant,
      }));
      useDispatch.mockImplementation(() => dispatch);
    });

    it('shows header and page name', () => {
      const { container } = renderApp({ path: '/restaurant/1' });

      expect(container).toHaveTextContent('헤더');
      expect(container).toHaveTextContent('Restaurant1');
    });
  });

  context('with URL included /nonExistentPage', () => {
    it('shows Not Found', () => {
      const { container } = renderApp({ path: '/non-existent' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
