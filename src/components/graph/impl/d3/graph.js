import * as d3 from 'd3';
import uniqBy from 'lodash/uniqBy';

function createLinks(root) {
  const descendants = root.descendants().slice(1);
  const uniqDescendants = uniqBy(descendants, 'data.id');
  const links = d3.select('.links')
    .selectAll('path')
    .data(uniqDescendants);

  links.enter()
    .append('path')
    .attr('d', link);
}

function createNodes(root) {
  const descendants = root.descendants();
  const uniqDescendants = uniqBy(descendants, 'data.id');

  const nodes = d3.select('.nodes')
    .selectAll('g.node')
    .data(uniqDescendants);

  const enteringNodes = nodes.enter()
    .append('g')
    .classed('node', true)
    .attr('transform', d => `translate(${d.y},${d.x})`);

  enteringNodes
    .append('circle')
    .attr('r', 2);
}

function renderGraph(root) {
  createNodes(root);
  createLinks(root);
}

function link(d) {
  return `M${d.y},${d.x
  }C${(d.y + d.parent.y) / 2},${d.x
  } ${(d.y + d.parent.y) / 2},${d.parent.x
  } ${d.parent.y},${d.parent.x}`;
}

export function render(data) {
  const root = d3.hierarchy(data);
  const treeLayout = d3.tree().size([900, 600]);
  treeLayout(root);
  renderGraph(root);
}
