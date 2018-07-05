import React, { Component } from 'react';
import Graph from './components/graph';

class Pnd extends Component {
  render() {
    return (
      <div className="pnd">
        <div>Hi pnd!</div>
        <Graph activity={this.props.activity} />
      </div>
    );
  }
}

export default Pnd;
