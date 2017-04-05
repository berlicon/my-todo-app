import React, { Component } from 'react';

export default class AddToDo extends Component {
  addTodo = () => {
    if (this.txtTodo.value.trim().length > 0){
      this.props.addTodo(this.props.categoryId, this.txtTodo.value);
      this.txtTodo.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter todo title"
          disabled={!this.props.categoryId}
          ref={node => { this.txtTodo = node }}/>
        <button onClick={this.addTodo} disabled={!this.props.categoryId}>Add</button>
      </div>
    );
  }
}
