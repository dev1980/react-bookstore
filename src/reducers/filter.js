import actions from '../actions/index';

const { action } = actions;
const { CHANGE_FILTER } = action;

const booksReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if(action.payload !== 'All'){
        return action.payload;
      }
      return '';
      
      default:
      return state;
  }
};

export default booksReducer;
