import React, { Component } from 'react';
import Graph from './components/graph/graph';

class Pnd extends Component {
  render() {
    return (
      <div className="pnd">
        <div>Hi pnd!</div>
        <Graph model={this.props.plan} />
      </div>
    );
  }
}

export default Pnd;
