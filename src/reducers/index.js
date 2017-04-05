import { combineReducers } from 'redux'
import categories from './categories'
import selectedCategory from './selectedCategory'
import todoFilter from './todoFilter'

const todoApp = combineReducers({
  categories,
  selectedCategory,
  todoFilter
})

export default todoApp
