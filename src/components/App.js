import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import Progress from './Progress';
import AddCategory from './AddCategory';
import AddToDo from './AddToDo';
import CategoryTree from './CategoryTree';
import ToDos from './ToDos';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="table">
          <tbody>
            <tr>
              <td><h3>To-Do List</h3></td>
              <td><Filter data={this.props.data.todoFilter}/></td>
            </tr>
            <tr>
              <td colSpan="2"><Progress /></td>
            </tr>
            <tr>
              <td><AddCategory addCategory={this.props.addCategory} />
              </td>
              <td><AddToDo addTodo={this.props.addTodo} categoryId={this.props.data.selectedCategory.categoryId} /></td>
            </tr>
            <tr>
              <td><CategoryTree data={this.props.data} /></td>
              <td style={{ verticalAlign: 'top' }}>
                <ToDos data={this.props.data}/>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (value) => {
      dispatch({type: 'ADD_CATEGORY', text: value})
    },
    addTodo: (categoryId, todoTitle) => {
      let todoId = Date.now();
      dispatch({type: 'ADD_TODO_TO_SELECTED_CATEGORY', text: todoTitle, todoId: todoId, categoryId: categoryId });
      dispatch({type: 'ADD_TODO_TO_SELECTED_LIST', text: todoTitle, todoId: todoId});
    }
  }
}

const BindedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default BindedApp
