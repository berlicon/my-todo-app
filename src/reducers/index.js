import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import categories from './categories'
import selectedCategory from './selectedCategory'
import todoFilter from './todoFilter'

//import * as reducers from '../reducers'
//const todoApp = combineReducers(undoable(reducers))

const todoApp = combineReducers({
  categories: undoable(categories),
  selectedCategory: undoable(selectedCategory),
  todoFilter: todoFilter
})

export default todoApp
