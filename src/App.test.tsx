import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render App component', async () => {
    render(<App />);
    screen.debug();
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('TLotR')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getAllByRole('header'));
    expect(screen.getAllByRole('post'));

    fireEvent.click(screen.getByPlaceholderText(/Search.../i));
    fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'Sador' } });
    fireEvent.keyPress(screen.getByPlaceholderText(/Search.../i), {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    expect(await screen.findByText('Sador')).toBeInTheDocument();
    expect(await screen.findByAltText('Sador')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('post'));
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('More on wiki:')).toBeInTheDocument();
    expect(await screen.findByText('http://lotr.wikia.com//wiki/Sador')).toBeInTheDocument();
    fireEvent.click(await screen.findByText('x'));

    fireEvent.click(screen.getByPlaceholderText(/Search.../i));
    fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'xyz' } });
    fireEvent.keyPress(screen.getByPlaceholderText(/Search.../i), {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    expect(await screen.findAllByText('Sorry, Nothing found'));

    fireEvent.click(screen.getByPlaceholderText(/Search.../i));
    fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: '' } });
    fireEvent.keyPress(screen.getByPlaceholderText(/Search.../i), {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    expect(screen.queryByText('Sador')).toBeNull();
    expect(screen.queryAllByText('Sorry, Nothing found'));

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

    expect(screen.getByText('Posts Page')).toHaveClass('active');
    fireEvent.click(screen.getByText('Orders'));
    expect(await screen.findByText('Type of pie')).toBeInTheDocument();

    expect(screen.queryByText('Customer name:')).toBeNull();

    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'lowercasetext' } });
    fireEvent.click(screen.getByText('Order', { selector: 'input' }));
    expect(await screen.findByText('Invalid name')).toBeInTheDocument();
    expect(await screen.findByText('Invalid date')).toBeInTheDocument();
    expect(await screen.findByText('Invalid delivery type')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Tony' } });
    fireEvent.mouseDown(screen.getByTestId('date-input'));
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: '2023-04-24' } });
    fireEvent.click(screen.getAllByRole('radio')[0] as HTMLAnchorElement);
    fireEvent.click(screen.getByText('Order', { selector: 'input' }));
    expect(screen.queryByText('Customer name:')).toBeInTheDocument();
    expect(screen.queryByText('Order for a date:')).toBeInTheDocument();
  });
});
