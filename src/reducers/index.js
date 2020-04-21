import { combineReducers } from 'redux';
import books from './books';

const rootReducer = state => {
  const booksReducer = books(state);
  return combineReducers({
    booksReducer,
  });
};

export default rootReducer;
