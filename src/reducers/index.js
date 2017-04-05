import { combineReducers } from 'redux'
import categories from './categories'
import selectedCategoryTodos from './selectedCategoryTodos'

const todoApp = combineReducers({
  categories,
  selectedCategoryTodos
})

export default todoApp
