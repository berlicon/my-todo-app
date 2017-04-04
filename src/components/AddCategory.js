import React, { Component } from 'react';

export default class AddCategory extends Component {
  addCategory = () => {
    if (this.input.value.trim().length > 0){
      this.props.addCategory(this.input.value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter category title"
           ref={node => { this.input = node }}/>
        <button onClick={this.addCategory}>Add</button>
      </div>
    );
  }
}
