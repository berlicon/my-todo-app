import ToDoItem from '../model/ToDoItem';
import CategoryItem from '../model/CategoryItem';
import reducer from './selectedCategory'

describe('selectedCategory reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        categoryId: null,
        todos: []
      }
    )
  })

  it('should handle ADD_TODO_TO_SELECTED_LIST', () => {
    expect(
      reducer(
        {
          categoryId: 1,
          todos:
          [ new ToDoItem(2, "ToDo #2", true, '')]
        },
        {
          type: 'ADD_TODO_TO_SELECTED_LIST',
          text: 'todoTitle',
          todoId: 3,
          categoryId: 1
        })
    ).toEqual(
      {
        categoryId: 1,
        todos:
        [
          new ToDoItem(3, "todoTitle", false, ''),
          new ToDoItem(2, "ToDo #2", true, '')
        ]
        }
    )
  })
})
