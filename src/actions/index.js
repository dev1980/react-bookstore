const action = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

const createBook = book => ({
  type: action.CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: action.REMOVE_BOOK,
  payload: book,
});

const changeFilter = () => ({
  type: action.CHANGE_FILTER,
});

export default { action, createBook, removeBook, changeFilter };
