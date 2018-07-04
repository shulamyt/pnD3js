import React, { Component } from 'react';
import * as d3 from 'd3/dist/d3';

class Graph extends Component {
  componentDidMount() {
    d3.select('.graph').append('span').text('Hello, world!');
  }

  render() {
    return (
      <div className="graph" />
    );
  }
}

export default Graph;
