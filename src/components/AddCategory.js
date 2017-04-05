import React, { Component } from 'react';

export default class AddCategory extends Component {
  addCategory = () => {
    if (this.txtCategory.value.trim().length > 0){
      this.props.addCategory(this.txtCategory.value);
      this.txtCategory.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter category title"
          ref={node => { this.txtCategory = node }}/>
        <button onClick={this.addCategory}>Add</button>
      </div>
    );
  }
}
