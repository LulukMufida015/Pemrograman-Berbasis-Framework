import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducers from './reducer/MainReducers';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './containers/Table';
import CreateTodo from './containers/CreateTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducers)

ReactDOM.render(<Provider store={store}>
    <CreateTodo />,
    <Table />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();