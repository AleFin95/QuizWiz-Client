import { render, screen } from '@testing-library/react';
import { describe, it,expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

import ResultsPage from './index';

expect.extend(matchers);

describe('ResultsPage Component', () => {
  it('should render an h1 element containing the text "ResultsPage"', () => {
    render(<ResultsPage />);
    const headingElement = screen.getByText('ResultsPage');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ResultsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
