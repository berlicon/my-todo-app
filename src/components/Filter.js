import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <label><input type="checkbox" name="chkShowDone" defaultChecked/>Show done</label>
        &nbsp;&nbsp;&nbsp;
        <input type="text" name="txtFilter" placeholder="Search"/>
      </div>
    );
  }
}
