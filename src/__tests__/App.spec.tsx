import { render } from '@testing-library/react';
import { act } from 'react';
import App from '../App';

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = await act(() => render(<App />));

    expect(baseElement).toBeInTheDocument();
  });
});
