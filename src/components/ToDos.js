import React, { Component } from 'react';
import { connect } from 'react-redux'
import editImage from './images/edit.png';

class ToDos extends Component {
  /*constructor(props) {
        super(props);
    }*/

  render() {
    this.listItems = this.props.data.selectedCategory.present.todos.map((todo) =>
    {
      return ((this.props.data.todoFilter.isDone && !todo.isDone)
      || !todo.title.includes(this.props.data.todoFilter.filter)) ? null :
      <div key={todo.id} className="todoDiv">
        <div style={{ height: '25px' }}>
          <div style={{ float: 'left' }}>
            <input type="checkbox" checked={todo.isDone} readOnly/>
            &nbsp;&nbsp;{todo.title}
          </div>
          <div style={{ float: 'right' }}>
            <button onClick={() => alert('show edit todo popup')}>
              <img src={editImage} alt="Edit todo" title="Edit todo"/>
            </button>
          </div>
        </div>
      </div>
    }
    );

    return (
      <div style={{ textAlign: 'left' }}>
        <div>Count of todos in selected category: <b>{this.listItems.length}</b></div>
        <hr/>
        {this.listItems}
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
