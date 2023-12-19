import * as matchers from '@testing-library/jest-dom/matchers';
import { mount } from '@vitest/react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';
import { useAuth } from '../../contexts'; 

jest.mock('../../contexts', () => ({
  useAuth: jest.fn(() => ({ setToken: jest.fn() })),
}));

const app = mount(Login);
expect.extend(matchers);
describe('Login Component', () => {
  it('renders the login form correctly', async () => {
    render(app);

    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('No account?')).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    render(app);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ token: 'fakeToken' }),
      })
    );

    fireEvent.change(screen.getByPlaceholderText('email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('password'), {
      target: { value: 'password123' },
    });

 
    fireEvent.click(screen.getByText('Log in'));

 
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  it('toggles SignUpComponent correctly', async () => {
    render(app);


    expect(screen.queryByText('SignUpComponent Content')).toBeNull();

    fireEvent.click(screen.getByText('Sign up'));

    expect(screen.getByText('SignUpComponent Content')).toBeInTheDocument();
  });
});
