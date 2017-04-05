import React, { Component } from 'react';
import { connect } from 'react-redux'

class ToDos extends Component {
  /*constructor(props) {
        super(props);
    }*/

  render() {
    this.listItems = this.props.data.selectedCategoryTodos.map((todo) =>
      <li key={todo.id}>
        <input type="checkbox" checked={todo.isDone} readOnly/>{todo.title}
      </li>
    );

    return (
      <div style={{ textAlign: 'left' }}>
        <div>Count of todos in selected category: <b>{this.listItems.length}</b></div>
        <hr/>
        <ul>{this.listItems}</ul>
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
    // selectCategory: (value) => {
    //   dispatch({type: 'SELECT_CATEGORY', todos: value})
    //}
  }
}

const BindedToDos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos)

export default BindedToDos
