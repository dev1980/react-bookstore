import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const rootReducer = state => {
  const booksReducer = books(state);
  return combineReducers({
    booksReducer,
    filter,
  });
};

export default rootReducer;
