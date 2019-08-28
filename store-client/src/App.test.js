import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import App from './App';

function renderApp () {
  const div = document.createElement('div');
  return ReactDOM.render(<App />, div);
}

function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

it('main page not logged in', () => {
  renderApp()
});

test('main page logged in', () => {
  Object.defineProperty(document, 'cookie', {
    get: jest.fn().mockImplementation(() => { return "cookie={%22userName%22:%22amit%22%2C%22isLoggedIn%22:true}"; }),
    set: jest.fn().mockImplementation(() => {}),
  });
  
  const {container} = renderWithRouter(<App />)
  expect(container.querySelector('h1').innerHTML).toMatch('Stop Dreaming Start LIVING!')
})