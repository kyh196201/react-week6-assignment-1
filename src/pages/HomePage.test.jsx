import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils';

import HomePage, { ROUTES } from './HomePage';

describe('<HomePage />', () => {
  const renderHomePage = () => render(
    (
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ),
  );

  it('renders title', () => {
    const { getByText } = renderHomePage();

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders links', () => {
    const { getByText } = renderHomePage();

    ROUTES.forEach((route) => {
      const capitalizedRoute = capitalizeFirstLetter(route);

      expect(getByText(capitalizedRoute)).toHaveAttribute('href', `/${route}`);
    });
  });
});
