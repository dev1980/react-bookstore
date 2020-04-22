import actions from '../actions/index';

const { action } = actions;
const { CHANGE_FILTER } = action;

const filterReducer = (state = 'Category', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload !== 'Category') {
        return action.payload;
      }
      return 'Category';

    default:
      return state;
  }
};

export default filterReducer;
