import React, { Component } from 'react';

export default class ToDos extends Component {
  constructor(props) {
        super(props);

        //let selectedCategoryId = this.props.data.selectedCategoryId;

        const todos = this.props.data.categories[0].todos;

        this.listItems = todos.map((todo) =>
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isDone} readOnly/>{todo.title}
          </li>
        );
    }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <div>Count of categories: {this.props.data.categories.length}</div>
        <div>Count of todos in selected category: {this.listItems.length}</div>
        <hr/>
        <ul>{this.listItems}</ul>
      </div>

    );
  }
}
