import React, { Component } from 'react';
import Links from './Links';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About info</h1>
        <Links currentUrl={this.props.location.pathname} />
      </div>
    );
  }
}
