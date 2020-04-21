import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const initialState = {
  books: [
    { id: Math.floor(Math.random() * 100).toString(), title: 'Title one', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 100).toString(), title: 'Title Two', category: 'Action' },
    { id: Math.floor(Math.random() * 100).toString(), title: 'Title Three', category: 'Kids' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
