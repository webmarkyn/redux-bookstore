import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uniqid from 'uniqid';


import rootReducer from './reducers';
import App from './components/App';

const defaultBooks = {
  books: [
    { id: uniqid(), title: 'El Viejo y el Mar', category: 'Biography' },
    { id: uniqid(), title: 'Harry Potter', category: 'Kids' },
    { id: uniqid(), title: 'Something Random', category: 'Learning' },
  ],
};

const store = createStore(rootReducer, defaultBooks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
