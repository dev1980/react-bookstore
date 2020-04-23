import actions from '../actions/index';

const { action } = actions;
const { CHANGE_FILTER } = action;

const filterReducer = (state = 'CATEGORIES', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload !== 'CATEGORIES') {
        return action.payload;
      }
      return 'CATEGORIES';

    default:
      return state;
  }
};

export default filterReducer;
