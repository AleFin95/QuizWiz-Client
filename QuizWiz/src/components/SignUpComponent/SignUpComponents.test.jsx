import '@testing-library/jest-dom/matchers'; // Ensure you include the Jest DOM matchers
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import SignUpComponent from '.';

describe('SignUpComponent', () => {
  beforeEach(() => {
    render(<SignUpComponent />);
  });

  it('Displays the registration form', () => {
    const usernameInput = screen.getByPlaceholderText('username');
    const passwordInput = screen.getByPlaceholderText('password');
    const registerButton = screen.getByRole('button');

    expect(usernameInput).to.exist;
    expect(passwordInput).to.exist;
    expect(registerButton).to.exist;
  });
  it("Displays the heading with 'Account Registration'", () => {
    const headingElement = screen.getByRole('heading');

    expect(headingElement).to.exist;
    expect(headingElement.textContent).toBe('Account Registration');
  });

  afterEach(() => {
    cleanup();
  });
});
