import { render } from '@testing-library/react';
import App from '../src/App';
import { act } from 'react';

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = await act(() => render(<App />));

    expect(baseElement).toBeInTheDocument();
  });
});
