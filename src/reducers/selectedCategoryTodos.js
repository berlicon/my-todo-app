let initialTodos = [];

const selectedCategoryTodos =  (state = initialTodos, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.todos;
    default:
      return state;
  }
}

export default selectedCategoryTodos
