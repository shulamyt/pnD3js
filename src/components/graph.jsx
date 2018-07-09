import React, { Component } from 'react';
import * as d3 from 'd3';
import './graph.scss';

class Graph extends Component {
  componentDidMount() {
    //var svg = d3.select(".graph").append("svg:svg").attr("width", 400).attr("height", 300).append("svg:g").attr("transform", "translate(40, 0)");
    var data = this.props.model;
    var root = d3.hierarchy(data);
    var treeLayout = d3.tree().size([900, 600]);
    treeLayout(root);
    renderGraph(root);




    function link(d) {
      return "M" + d.y + "," + d.x
        + "C" + (d.y + d.parent.y) / 2 + "," + d.x
        + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
    }
    function createLinks(root){
      var links = d3.select('.links')
        .selectAll('path')
        .data(root.descendants().slice(1));

      links.enter()
        .append('path')
        .attr('d', link);
    }

    function createNodes(root){
      var nodes = d3.select('.nodes')
        .selectAll('g.node')
        .data(root.descendants());

      var enteringNodes = nodes.enter()
        .append('g')
        .classed('node', true)
        .attr('transform', function(d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

      enteringNodes
        .append('circle')
        .attr('r', 2);

      enteringNodes
        .append('text')
        .attr('x', 5)
        .attr('y', 4)
        .text(function(d) {
          switch(d.depth) {
          case 1:
          case 2:
            return d.data.key;
          case 3:
            return d.data.Film;
          }

          return '';
        });
    }
    function renderGraph(root) {
      createNodes(root);
      createLinks(root);
    }
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
