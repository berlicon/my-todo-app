import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
        <FloatingActionButton mini={true} disabled={!this.props.categoryId} onClick={this.addTodo}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
