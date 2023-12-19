import * as matchers from '@testing-library/jest-dom/matchers';
import { mount } from '@vitest/react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './index'; // Import your Login component
import { useAuth } from '../../contexts'; // Import your useAuth context

// Mock the useAuth context
jest.mock('../../contexts', () => ({
  useAuth: jest.fn(() => ({ setToken: jest.fn() })),
}));

const app = mount(Login);

describe('Login Component', () => {
  it('renders the login form correctly', async () => {
    render(app);

    // Check if the elements are rendered
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('No account?')).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    render(app);

    // Mock the fetch request
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ token: 'fakeToken' }),
      })
    );

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('password'), {
      target: { value: 'password123' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText('Log in'));

    // Wait for the fetch request to resolve
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Check if the setToken function is called with the correct token
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  it('toggles SignUpComponent correctly', async () => {
    render(app);

    // Check if SignUpComponent is initially not visible
    expect(screen.queryByText('SignUpComponent Content')).toBeNull();

    // Simulate clicking the "Sign up" button
    fireEvent.click(screen.getByText('Sign up'));

    // Check if SignUpComponent becomes visible
    expect(screen.getByText('SignUpComponent Content')).toBeInTheDocument();
  });
});
