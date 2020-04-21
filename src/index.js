import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';

const store = createStore(rootReducer);

const initialState = {

  books: [
    { id: Math.floor(Math.random() * 5), title: 'Title one', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 5), title: 'Title Two', category: 'Action' },
    { id: Math.floor(Math.random() * 5), title: 'Title Three', category: 'Kids' },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

export default initialState;
