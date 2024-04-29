import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NearCities } from '../../../search/components/NearCities';

describe('Pruebas en <NearCities />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('renders list of near cities', () => {
    const results = [
      { name: 'City 1' },
      { name: 'City 2' },
      { name: 'City 3' },
    ];

    render(<NearCities results={results} />);

    const cityElements = screen.getAllByRole('listitem');
    expect(cityElements).toHaveLength(results.length);

    results.forEach((city, index) => {
      expect(cityElements[index]).toHaveTextContent(city.name);
    });
  });

});