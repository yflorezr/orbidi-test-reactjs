import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Results } from '../../../search/components/Results';
import '@testing-library/jest-dom';

const mockResults = [
  { name: 'City 1', lat: "1", lng: "1", country: 'Country 1' },
  { name: 'City 2', lat: "2", lng: "2", country: 'Country 2' },
  { name: 'City 3', lat: "3", lng: "3", country: 'Country 3' },
];

test('renders no results message when results array is empty', () => {
  render(<Results onCityClick={() => { }} results={[]} />);
  const noResultsMessage = screen.getByText(/No results/i);
  expect(noResultsMessage).toBeInTheDocument();
});

test('renders list of cities when results array is not empty', () => {
  render(<Results onCityClick={() => { }} results={mockResults} />);
  const city1 = screen.getByText(/City 1/i);
  const city2 = screen.getByText(/City 2/i);
  const city3 = screen.getByText(/City 3/i);
  expect(city1).toBeInTheDocument();
  expect(city2).toBeInTheDocument();
  expect(city3).toBeInTheDocument();
});

test('calls onCityClick callback when a city is clicked', () => {
  const mockOnCityClick = jest.fn();
  render(<Results onCityClick={mockOnCityClick} results={mockResults} />);
  const city2 = screen.getByText(/City 2/i);
  fireEvent.click(city2);
  expect(mockOnCityClick).toHaveBeenCalledWith(mockResults[1]);
});

test('selects the clicked city', () => {
  render(<Results onCityClick={() => { }} results={mockResults} />);
  const city2 = screen.getByText(/City 2/i);
  fireEvent.click(city2);
  const selectedCity = screen.getByTestId('selected-city');
  expect(selectedCity).toHaveTextContent('City 2');
});

test('calls onCityClick callback with the correct city', () => {
  const mockOnCityClick = jest.fn();
  render(<Results onCityClick={mockOnCityClick} results={mockResults} />);
  const city3 = screen.getByText(/City 3/i);
  fireEvent.click(city3);
  expect(mockOnCityClick).toHaveBeenCalledWith(mockResults[2]);
});
