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
            new ToDoItem(action.todoId, action.text, false, ''),
            ...state.todos]
        }
    case 'UPDATE_TODO_IN_SELECTED_LIST':
      var copy = Object.assign([], state.todos);

      //TODO: need to upd todo in nested categories also
      copy.forEach(function(todo) {
        if (todo.id === action.todoId) {
          todo.title = action.title;
          todo.isDone = action.isDone;
          todo.description = action.description;
        }
      });

      return {
          categoryId: state.categoryId,
          todos: copy
        }
    default:
      return state;
  }
}

export default selectedCategory
