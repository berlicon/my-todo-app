import CategoryItem from '../model/CategoryItem';
import ToDoItem from '../model/ToDoItem';

let data = [
    new CategoryItem(1, "Category 1",
    [
      new CategoryItem(2, "Category 1.1", [], []),
      new CategoryItem(3, "Category 1.2",
          [
            new CategoryItem(4, "Category 1.2.1", [], []),
            new CategoryItem(5, "Category 1.2.2", [], []),
          ],
          [
            new ToDoItem(1, "ToDo #1.2-1", false, ''),
            new ToDoItem(2, "ToDo #1.2-2", true, ''),
            new ToDoItem(3, "ToDo #1.2-3", false, ''),
          ]
     ),
    ],
    [
      new ToDoItem(4, "ToDo #1-1", false, ''),
      new ToDoItem(5, "ToDo #1-2", true, ''),
      new ToDoItem(6, "ToDo #1-3", true, ''),
    ]),
    new CategoryItem(6, "Category 2",
    [
      new CategoryItem(7, "Category 2.1", [], []),
      new CategoryItem(8, "Category 2.2", [], []),
    ],
    [
      new ToDoItem(7, "ToDo #2-1", false, ''),
      new ToDoItem(8, "ToDo #2-2", true, ''),
    ]),
    new CategoryItem(9, "Category 3",
    [
      new CategoryItem(10, "Category 3.1", [], []),
    ],
    [
    ]),
    new CategoryItem(11, "Category 4",
    [
    ],
    [
      new ToDoItem(9, "ToDo #4-1", true, ''),
    ]),
];

const categories = (state = data, action) => {
  let copy = Object.assign([], state);

  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
          new CategoryItem(Date.now(), action.text, [], []),
          ...state
        ];
    case 'DELETE_CATEGORY':
      return state.filter((elem) => { return elem.id !== action.id});
    case 'ADD_TODO_TO_SELECTED_CATEGORY':
      //TODO: need to add todo in nested categories also
      copy.forEach(function(category) {
        if (category.id === action.categoryId) {
          category.todos = [
            new ToDoItem(action.todoId, action.text, false, ''),
            ...category.todos
          ];
        }
      });

      return copy;
    case 'UPDATE_TODO_TO_SELECTED_CATEGORY':
      //TODO: need to update todo in nested categories also
      copy.forEach(function(category) {
        category.todos.forEach(function(todo) {
          if (todo.id === action.todoId) {
            todo.title = action.title;
            todo.isDone = action.isDone;
            todo.description = action.description;
          }
        });
      });

      return copy;
    default:
      return state;
  }
}

export default categories
