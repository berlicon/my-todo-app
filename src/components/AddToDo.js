import React, { Component } from 'react';

export default class AddToDo extends Component {
  render() {
    return (
      <div>
        <input type="text" name="txtTodo" placeholder="Text input with button"/>
        <input type="button" name="btnAddToDo" value="Add"/>
      </div>
    );
  }
}
