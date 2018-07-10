import * as d3 from 'd3';
import uniqBy from 'lodash/uniqBy';

function renderGraph(root) {
  createNodes(root);
  createLinks(root);
}

function createLinks(root){
  var descendants = root.descendants().slice(1);
  var uniqDescendants = uniqBy(descendants, 'data.id');
  var links = d3.select('.links')
    .selectAll('path')
    .data(uniqDescendants);

  links.enter()
    .append('path')
    .attr('d', link);
}

function createNodes(root){
  var descendants = root.descendants();
  var uniqDescendants = uniqBy(descendants, 'data.id');

  var nodes = d3.select('.nodes')
    .selectAll('g.node')
    .data(uniqDescendants);

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

function link(d) {
  return "M" + d.y + "," + d.x
    + "C" + (d.y + d.parent.y) / 2 + "," + d.x
    + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
    + " " + d.parent.y + "," + d.parent.x;
}

export function render (data) {
    var root = d3.hierarchy(data);
    var treeLayout = d3.tree().size([900, 600]);
    treeLayout(root);
    renderGraph(root);
    
}