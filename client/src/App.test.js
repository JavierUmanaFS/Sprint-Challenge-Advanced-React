import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getAllByText } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('renders correctly', () => {
  render(<App />);
})

test('header text renders', () => {
  const { getByText } = render(<App />);
  getByText(/list of players/i);

  // expect(header).toBeInTheDocument();
});

test('toggle dark mode renders', () => {
  const { getAllByTestId } = render(<App />);

  const toggleDark = getAllByTestId(/darkmodeToggle/i)

  expect(toggleDark).toBeTruthy();
})

test('playerCard renders', () => {
  const { getAllByTestId } = render(<App />);

  const playerCards = getAllByTestId(/playerCard/i)
})

test('players data renders', () => {
  const { getAllByTestId } = render(<App />);

  const playerData = getAllByTestId(/playerData/i)
})

// test('toggle dark mode click', () => {
//   const { getAllByTestId } = render(<App />);

//   const toggleDark = getAllByTestId(/darkmodeToggle/i)

//   fireEvent.click(toggleDark, { target: { value: true } })

//   expect(toggleDark.value).toBe(true)
// })

// test('player card renders', () => {
//   const { getAllByTestId } = render(<PlayerCards />);
//   getAllByTestId(/playerCards/i);

// })