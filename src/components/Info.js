import React, { Component } from 'react';
import 'whatwg-fetch';

export default class Info extends Component {
  constructor(props) {
        super(props);
        this.state = {
            rate: '???',
        };
    }

componentDidMount() {
    var self = this;

    fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDRUB%22)&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('rate', json.query.results.rate.Rate);
        self.setState({
            rate: json.query.results.rate.Rate
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      })
  }

  render() {
    return (
      <div>
        Rate USD-RUB (Yahoo Finance REST API): {this.state.rate}
      </div>
    );
  }
}
