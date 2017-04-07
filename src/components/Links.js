import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Links extends Component {
  render() {
    return (
      <div>
        <Link to={(this.props.currentUrl === '/') ? null : '/'}
          style={ (this.props.currentUrl === '/') ? { color: 'red' } : null }
          >Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={(this.props.currentUrl === '/about') ? null : '/about'}
          style={ (this.props.currentUrl === '/about') ? { color: 'red' } : null }
          >About</Link>
      </div>
    );
  }
}
