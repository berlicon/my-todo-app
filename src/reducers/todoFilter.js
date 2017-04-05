let initialFilter = {
  isDone: false,
  filter: '',
};

const todoFilter =  (state = initialFilter, action) => {
  switch (action.type) {
    case 'CHANGE_IS_DONE':
      return {
        isDone: action.isDone,
        filter: state.filter,
      };
    case 'CHANGE_FILTER':
      return {
        isDone: state.isDone,
        filter: action.filter,
      };
    default:
      return state;
  }
}

export default todoFilter
