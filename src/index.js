import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const defaultBooks = {
  books: [
    { id: Math.floor(Math.random() * 10).toString(), title: 'El Viejo y el Mar', category: 'Biography' },
    { id: Math.floor(Math.random() * 10).toString(), title: 'Harry Potter', category: 'Kids' },
    { id: Math.floor(Math.random() * 10).toString(), title: 'Something Random', category: 'Learning' },
  ],
};

const store = createStore(rootReducer, defaultBooks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
