import ToDoItem from '../model/ToDoItem';

let initialData = {
  categoryId: null,
  todos: []
};

const selectedCategory =  (state = initialData, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
          categoryId: action.categoryId,
          todos: action.todos
        }
    case 'ADD_TODO_TO_SELECTED_LIST':
      return {
          categoryId: state.categoryId,
          todos: [
            new ToDoItem(action.todoId, action.text, false),
            ...state.todos]
        }
    default:
      return state;
  }
}

export default selectedCategory
