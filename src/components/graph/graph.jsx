import React, { Component } from 'react';
import * as graph from './impl/d3/graph';
import './graph.scss';

class Graph extends Component {
  componentDidMount() {
    var data = this.props.model;
    graph.render(data);
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return (
      <div className="graph">
        <svg width="800" height="920">
          <g className="wrapper" transform="translate(20, 20)">
            <g className="links"></g>
            <g className="nodes"></g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Graph;
