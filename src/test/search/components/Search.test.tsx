import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Search } from '../../../search/components/Search';

test('onSearchType should call callback when term length is greater than or equal to minChars', async () => {
  const minChars = 3;
  const callback = jest.fn();

  render(<Search minChars={minChars} callback={callback} />);
  const input = screen.getByTestId('search-input');

  fireEvent.change(input, { target: { value: 'test' } });

  await waitFor(() => expect(callback).toHaveBeenCalledTimes(1));
  expect(callback).toHaveBeenCalledWith('test');
});

test('onSearchType should not call callback when term length is less than minChars', () => {
  const minChars = 3;
  const callback = jest.fn();
  render(<Search minChars={minChars} callback={callback} />);
  const input = screen.getByTestId('search-input');

  fireEvent.change(input, { target: { value: 'te' } });

  expect(callback).not.toHaveBeenCalled();
});