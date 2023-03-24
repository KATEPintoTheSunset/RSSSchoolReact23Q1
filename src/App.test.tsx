import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render App component', async () => {
    render(<App />);
    screen.debug();
    expect(screen.getByAltText(/Apple pie/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getAllByRole('post'));
    expect(screen.getAllByRole('header'));

    fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'HELLO' } });
    fireEvent.blur(screen.getByPlaceholderText(/Search.../i));
    fireEvent.focus(screen.getByPlaceholderText(/Search.../i));
    expect(await screen.findByText('HELLO')).toBeInTheDocument();

    expect(screen.getByText('Posts Page')).toHaveClass('active');
    fireEvent.click(screen.getByText('About Us'));
    expect(
      await screen.findByText(
        'Hello! Sorry, there is nothing special here yet, but it may appear later'
      )
    ).toBeInTheDocument();

    expect(screen.getByText('About Us')).toHaveClass('active');
    fireEvent.click(screen.getByText('Posts Page'));
    expect(
      screen.queryByText('Hello! Sorry, there is nothing special here yet, but it may appear later')
    ).toBeNull();
  });
});
