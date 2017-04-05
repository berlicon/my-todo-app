import { combineReducers } from 'redux'
import categories from './categories'
import selectedCategoryTodos from './selectedCategoryTodos'
import todoFilter from './todoFilter'

const todoApp = combineReducers({
  categories,
  selectedCategoryTodos,
  todoFilter
})

export default todoApp
