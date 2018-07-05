import React, { Component } from 'react';
import * as d3 from 'd3/dist/d3';

class Graph extends Component {
  componentDidMount() {
    console.log('Graph: componentDidMount');
    const { activity } = this.props;
    this.changeActivityName(activity);
  }

  shouldComponentUpdate(nextProps) {
    const { activity } = nextProps;
    this.changeActivityName(activity);
    return false;
  }

  changeActivityName(activity) {
    console.log('Graph: changeActivityName');
    d3.select('.graph').append('span').text(activity.name);
  }

  render() {
    console.log('Graph: render');
    return (
      <div className="graph" />
    );
  }
}

export default Graph;
