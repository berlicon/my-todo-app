import React, { Component } from 'react';
import './App.css';

export default class Progress extends Component {
  render() {
    return (
      <div className="w3-container">
        <div className="w3-border">
          <div className="w3-grey progress"></div>
        </div>
      </div>
    );
  }
}
