import { combineReducers } from 'redux';
import books from './books';

const initialState = {

  books: [
    { id: Math.floor(Math.random() * 5), title: 'Title one', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 5), title: 'Title Two', category: 'Action' },
    { id: Math.floor(Math.random() * 5), title: 'Title Three', category: 'Kids' },
  ],
};

const booksReducer = books(initialState);

const rootReducer = combineReducers({
  booksReducer,
});

export default rootReducer;
