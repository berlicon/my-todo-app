import React, { Component } from 'react';
import { Line } from 'rc-progress';

export default class Progress extends Component {
  constructor(props) {
        super(props);
        this.progress = this.getProgress(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.progress = this.getProgress(nextProps.data);
  }

  getProgress(data) {
    let totalTodos = 0;
    let completedTodos = 0;

    for (var i = 0; i < data.categories.present.length; i++) {
      for (var j = 0; j < data.categories.present[i].todos.length; j++) {
        totalTodos++;
        if (data.categories.present[i].todos[j].isDone) completedTodos++;
      }
    }

    return Math.round((completedTodos / totalTodos) * 100);
  }

  render() {
    return (
      <div>
        <Line percent={this.progress} strokeWidth="1" strokeColor="green" /><br/>
        <h5>{this.progress}% completed</h5>
      </div>
    );
  }
}
