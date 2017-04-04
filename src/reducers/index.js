import { combineReducers } from 'redux'
import categories from './categories'
import selectedCategory from './selectedCategory'

const todoApp = combineReducers({
  categories,
  selectedCategory
})

export default todoApp
