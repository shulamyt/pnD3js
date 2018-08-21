function SVG(tag)
{
   return document.createElementNS('http://www.w3.org/2000/svg', tag);
}
var addSuccessor = function(n2,index) {
	if(index != undefined) {
		this.successors.splice(index,0,n2);
	}else {
		this.successors.push(n2);
	}
	n2.predeccessors.push(this);
};
var removeSuccessor = function(succesorIndex) {
	var predIndexAtSuccessor = _.indexOf(this.successors[succesorIndex].predeccessors,this);
	this.successors[succesorIndex].predeccessors.splice(predIndexAtSuccessor,1);
	this.successors.splice(succesorIndex,1);
};

var setLayerToNode = function(layer) {
	this.layer = layer;
};
function Node(name,status,desc,successors,isDummy) {

	var node = {
		successors : [],
	  	predeccessors : [],
		name:name,
		status:status,
		desc:desc,
		point:null,
	  	layer:null,
	  	setLayer : setLayerToNode,
		addSuccessor : addSuccessor,
	  	removeSuccessor: removeSuccessor,
		isDummy : isDummy,
		indexInLayer : null
	};
	if(successors) {
		for(var i=0;i < successors.length;i++) {
			node.addSuccessor(successors[i]);
		}	
	}
	return node;
};

var addNodeToLayer = function(node){
	node.indexInLayer = this.nodes.length;
	this.nodes.push(node);
	node.setLayer(this);
};

function Layer(index) {

	var layer = {
	  nodes : [],
	  index : index,
	  addNode : addNodeToLayer
	};
	return layer;
};

var getLayerFromGraph = function(index){
  return this.layers[index];
};

var addLayerToGraph = function(){
	var layerIndex = this.layers.length;
	this.layers[layerIndex] = new Layer(layerIndex);
	return this.layers[layerIndex];
};

function Graph(root){
  var graph = {
	root: root,
	nodes : [],
	layers : [],
	addLayer : addLayerToGraph,
	getLayer : getLayerFromGraph
  };
  return graph;	
};



/*function Edge(n1,n2) {
	return {
		n1 : n1,
		n2 : n2
	};
}*/
function Point(x,y) {
 
	return {
		x : x,
		y : y
	};
}
function SvgGraph(options) {

var $svg = $('#'+options.svgId);
var width = options.width;
var height = options.height;
var nodeSpace = options.nodeSpace;
var nodeRadius = options.nodeRadius;
var nodeFill = options.nodeFill;
var nodeStrokeWidth = options.nodeStrokeWidth;
var edgeStroke = options.edgeStroke;
var edgeStrokeWidth = options.edgeStrokeWidth;
var nodeTextFill = options.nodeTextFill;
var nodeFontSize = options.nodeFontSize;
var nodeTextAnchor = options.nodeTextAnchor;
var graph = options.graph;
var initialXoffset = options.initialXoffset || 10;
return {
	graph: graph,
	zoom : function(scale) {
		for (var i=0; i<this.transMatrix.length; i++)
		{
			this.transMatrix[i] *= scale;
		}
		this.transMatrix[4] += (1-scale)*width/2;
		this.transMatrix[5] += (1-scale)*height/2;
		this._updateTransformationMatrix(this.$rootTransMatrixGroup,this.transMatrix)
	},
	pan : function(dx, dy) {
		this.transMatrix[4] += dx;
		this.transMatrix[5] += dy;
		this._updateTransformationMatrix(this.$rootTransMatrixGroup,this.transMatrix)
	},
	_getTransMatrixAttributeStr : function(transMatrix) {
		return 'matrix('+transMatrix.join(' ')+')';
	},
	_updateTransformationMatrix : function(transformationMatrixGroup,transMatrix) {
		var newMatrix = this._getTransMatrixAttributeStr(transMatrix);
		transformationMatrixGroup.attr('transform',newMatrix);
	},
	createGroup : function(tag,id) {
		var g = $(SVG('g'))
				.attr('id',id);
		g.appendTo(tag);
		return g;	
	},
	createTransformationGroup : function(tag,id,transformationValue) {
		var g = this.createGroup(tag,id);
		g.attr('transform',transformationValue);
		return g;
	},

	createMatrixTransformationGroup : function(tag,id,transMatrix) {
		var matrixAttributeStr = this._getTransMatrixAttributeStr(transMatrix);
		return this.createTransformationGroup(tag,id,matrixAttributeStr);
	},
	createText : function(tag,text,x,y,fill,fontSize,textAnchor) {
		$(SVG('text'))
		.attr('x', x)
		.attr('y', y)
		.attr('fill',fill )
		.attr('font-size', fontSize)
		.attr('text-anchor', textAnchor)
		.text(text)
		.appendTo(tag);
	},
	createCircle : function(tag,x,y,r,fill,strokeWidth) {
		$(SVG('circle'))
		.attr('cx', x)
		.attr('cy', y)
		.attr('r', r)
		.attr('fill',fill )
		.attr('stroke-width', strokeWidth)
		.appendTo(tag);
	},
	setNodeColor : function(nodeName,color) {
		$('text').filter(function() {
			return $(this).text() == nodeName;
		})
		.prev().attr('fill',color );
	},
	getAngle : function(x1,y1,x2,y2)
	{
		var dx = x2 - x1;
		// Minus to correct for coord re-mapping
		var dy = -(y2 - y1);

		var inRads = Math.atan2(dy,dx);

		// We need to map to coord system when 0 degree is at 3 O'clock, 270 at 12 O'clock
		if (inRads < 0)
			inRads = Math.abs(inRads);
		else
			inRads = 2*Math.PI - inRads;

		return inRads;
	},
	createPath : function(tag,points,stroke,strokeWidth,node) {
		var d = '';
		for(var i=0;i < points.length;i++) {
			d += (i==0?'M ':' L ')+points[i].x+','+points[i].y;
		}
		if(points.length > 0) {
			$(SVG('path'))
			.attr('d', d)
			.attr('fill',"transparent" )
			.attr('stroke',stroke )
			.attr('stroke-width', strokeWidth)
			.appendTo(tag);
			
			if(node && !node.isDummy) {
				var lastPoint = points[points.length-1];
				var radiansAngle = this.getAngle(points[0].x,points[0].y,lastPoint.x,lastPoint.y);
				var degreesAngle = radiansAngle * 180/Math.PI;	
				var yOffset = -Math.sin(radiansAngle);
				var xOffset = -Math.cos(radiansAngle)*nodeRadius;
				$(SVG('path'))
				.attr('d'," M "+(lastPoint.x+xOffset)+" "+(lastPoint.y+yOffset)+
							" L "+ (lastPoint.x-7+xOffset)+
								" "+(lastPoint.y+3.5+yOffset)+
							" L "+(lastPoint.x-5+xOffset)+
								" "+(lastPoint.y+yOffset)+
							" L "+(lastPoint.x-7+xOffset)+
								" "+(lastPoint.y-3.5+yOffset)+
							" z")
				.attr('transform',"rotate("+degreesAngle+","+lastPoint.x+","+lastPoint.y+")" )
				.attr('fill',"6482B9" )
				.attr('stroke',"#6482B9" )
				.attr('stroke-opacity',"1" )
				.attr('stroke',"#6482B9" )
				.attr('fill-opacity', "1")
				.appendTo(tag);
			}
		}
	},
	
	_calculateXCoordinate : function(node) {
		return initialXoffset+(node.layer.index) * nodeSpace
	},
	_drawNode : function(tag,node,nodeRadius,nodeFill,nodeStrokeWidth) {
		if(!node.isDummy) {
			this.createCircle(tag,node.point.x,node.point.y,nodeRadius,node.isDummy ? "red" : nodeFill,nodeStrokeWidth);
			this.createText(tag,node.name,node.point.x,node.point.y-10,nodeTextFill,nodeFontSize,nodeTextAnchor);
		}
	},
	_getMaxNodesLayer : function() {
		var maxLayer = graph.layers[0];
		for(var i=1;i < graph.layers.length;i++) {
			if(graph.layers[i].nodes.length > maxLayer.nodes.length) {
				maxLayer = graph.layers[i];
			}
		}
		return maxLayer;
	},
	_plotLayer : function(tag,layer,centerY) {
		var midIndex = /*Math.ceil(*/layer.nodes.length / 2/*)*/;
		for(var i=0;i < layer.nodes.length;i++) {
			var x = this._calculateXCoordinate(layer.nodes[i]);
			var y = centerY + nodeSpace*(i-midIndex+1);
			layer.nodes[i].point = new Point(x,y);
			
			for(var j=0;j < layer.nodes[i].predeccessors.length;j++) {
				this.createPath(tag,[layer.nodes[i].predeccessors[j].point,layer.nodes[i].point],edgeStroke,edgeStrokeWidth,layer.nodes[i]);
			}
			this._drawNode(tag,layer.nodes[i],nodeRadius,nodeFill,nodeStrokeWidth);
		}
	},
	_plotLayeredGraph : function(tag) {
		$("#rootTransMatrixGroup").empty();
		var maxLayer = this._getMaxNodesLayer();
		var centerY = maxLayer.nodes.length * nodeSpace / 2;
		for(var i=0;i < graph.layers.length;i++) {
			this._plotLayer(tag,graph.layers[i],centerY);
		}
	},
	_drawGridVerticalLines : function(verticalWeight) {
		for(var i=0;i <= verticalWeight;i++) {
			this.createPath($('#mysvg'),[new Point(0,i*nodeSpace),new Point(600,i*nodeSpace)],"black",1);
		}
	},
	_drawGridHorizontalLines : function(layersCount) {
		for(var i=0;i < layersCount;i++) {
			this.createPath($('#mysvg'),[new Point(initialXoffset+i*nodeSpace,0),new Point(initialXoffset+i*nodeSpace,600)],"black",1);
		}
	},
	plotGraph : function() {
		var t1 , t2;
		this.transMatrix = [1,0,0,1,0,0];
		this.$rootTransMatrixGroup = this.createMatrixTransformationGroup($svg,'rootTransMatrixGroup',this.transMatrix);
		t1 = Date.now();
		var layersCount = this._layerGraph();
		t2 = Date.now();
		console.log("layered "+layersCount+" time="+(t2-t1));
		//this._drawGridHorizontalLines(graph.layers.length);
		t1 = Date.now();
		var dummiesCount = this._addDummyNodesToGraph(graph.root);
		t2 = Date.now();
		console.log("adding "+dummiesCount+" dummies time="+(t2-t1));
		t1 = Date.now();
		this._orderNodesToMinimizeEdgeCrossings();
		t2 = Date.now();
		console.log("edge cross minimizing time="+(t2-t1));
		t1 = Date.now();
		
		//this._plotGraph(rootTransMatrixGroup,graph.root);
		this._plotLayeredGraph(this.$rootTransMatrixGroup);
		t2 = Date.now();
		console.log("plotting time="+(t2-t1));
	},
  _toNodesArray : function(nodes,arr) {
		if(!arr) {
		  arr = new Array();
		}
		arr = _.union(arr,nodes);
		for(var i=0;i<nodes.length;i++){
		  arr = this._toNodesArray(nodes[i].successors,arr);
		}
		return arr;
  },
  _areAllChildrenInLowerLevels : function(node,lowerLayeredNodes) {
		for(var j=0;j < node.successors.length;j++) {
		  if(!$.inArray(node, lowerLayeredNodes)) {
			return false;
		  }
		}
		return true;
  },
  _findNodeWithAllChildrenInLowerLevels : function(nodes,lowerLayeredNodes) {
		for(var i=0;i < nodes.length;i++){
		  if(this._areAllChildrenInLowerLevels(nodes[i],lowerLayeredNodes)){
			return i;
		  }
		}
		return null;
  },
  _areAllPredecessorsLayered : function(node,layeredNodes) {
		for(var i=0;i < node.predeccessors.length;i++) {
		  if($.inArray(node.predeccessors[i], layeredNodes) == -1) {
			return false;
		  }
		}
		return true;
  },
  _findNodeWithAllPredecessorsLayered : function(nodes,lowerLayeredNodes) {
		for(var i=0;i < nodes.length;i++){
		  if(this._areAllPredecessorsLayered(nodes[i],lowerLayeredNodes)){
			return i;
		  }
		}
		return null;
  },
  _layerGraph : function() {
		var nodesToLayer = this._toNodesArray([graph.root]);
		var layeredNodes = new Array();
		var lowerLayeredNodes = new Array();
		var currentLayerIndex = 0;
		var currentLayer= null;
		var node = graph.root;
		var nodeIndex = 0;
		while(nodesToLayer.length > 0) {
		  	
		  	if(nodeIndex != null) {
				currentLayer = graph.getLayer(currentLayerIndex);
			  	if(!currentLayer) {
				  	currentLayer = graph.addLayer(currentLayerIndex);
			  	}
			  	currentLayer.addNode(nodesToLayer[nodeIndex]);
			  	layeredNodes.push(nodesToLayer[nodeIndex]);
			  	nodesToLayer.splice(nodeIndex,1);
			} else {
			  	currentLayerIndex++;
			  	lowerLayeredNodes = _.union(lowerLayeredNodes,layeredNodes);
			}
			nodeIndex = this._findNodeWithAllPredecessorsLayered(nodesToLayer,lowerLayeredNodes);
		}

		return graph.layers.length;
  },

  _sortEdgesByOrderInLayer : function(node) {
	_.sortBy(node.successors,"indexInLayer");
	_.sortBy(node.predeccessors,"indexInLayer");
	for(var i=0;i < node.successors.length;i++) {
		this._sortEdgesByOrderInLayer(node.successors[i]);
	}
  },
  
  _addDummyNodesToGraph : function(rootNode){
	var dummiesCount=0;
	var graphNodes = this._toNodesArray([rootNode]);
	for(var i=0;i < graphNodes.length;i++){
	  var node = graphNodes[i];
	  var nodeSuccessors = node.successors;
	  for(var j=0;j < nodeSuccessors.length;j++){
		var nodeSuccessor = nodeSuccessors[j];
		if(this._dummyNodesAreNeeded(node, nodeSuccessor)){
		  node.removeSuccessor(j);
		  dummiesCount += this._addDummyNodesBetweenTwoNodes(node, nodeSuccessor,j);
		}
	  }
	}
	return dummiesCount;
  },
  
  _dummyNodesAreNeeded : function(node, nodeSuccessor){	
	return ((nodeSuccessor.layer.index - node.layer.index) > 1);
  },
  
  _addDummyNodesBetweenTwoNodes : function(node, nodeSuccessor,successorIndex){
	var layersDelta = nodeSuccessor.layer.index - node.layer.index;
	var dummyNodeSuccessor = nodeSuccessor;
	var dummiesCount = 0;
	for(var i=layersDelta-1 ; i > 0; i--){
	  dummyNodeSuccessor = this._createDummyNode(node, nodeSuccessor, dummyNodeSuccessor, i);
	  dummiesCount++;
	}
	node.addSuccessor(dummyNodeSuccessor,successorIndex);
	return dummiesCount;
  },
  
  _createDummyNode : function(node, nodeSuccessor, dummyNodeSuccessor, relativeLayerIndex){
	var layerIndex = node.layer.index + relativeLayerIndex;
	var name = "Dummy"//node.name + "_" + nodeSuccessor + "_" + "layer:" + layerIndex;
	var dummyNode = new Node(name,null,null,[dummyNodeSuccessor],true);
	graph.layers[layerIndex].addNode(dummyNode);
	return dummyNode;
  },
  
  _createCrossCountMatrix : function(L1,L2) {
	var matrix = [];
	
	for(var i=0;i < L2.nodes.length;i++) {
		matrix[i] = [];
		for(var j=0;j < L2.nodes.length;j++) {
			if(i==j) {
				matrix[i][j] = 0;
			} else if(i < j){
				matrix[i][j] = this._countEdgeCrosses(L2.nodes[i],L2.nodes[j]);
			}else {
				var origFirstNodeLayerIndex = L2.nodes[i].indexInLayer;
				var origSecondNodeLayerIndex = L2.nodes[j].indexInLayer;
				L2.nodes[i].indexInLayer = origSecondNodeLayerIndex;
				L2.nodes[j].indexInLayer = origFirstNodeLayerIndex;
				matrix[i][j] = this._countEdgeCrosses(L2.nodes[i],L2.nodes[j]);
				L2.nodes[i].indexInLayer = origFirstNodeLayerIndex;
				L2.nodes[j].indexInLayer = origSecondNodeLayerIndex;
			}
		}
	}
	return matrix;
  },
  _countEdgeCrosses : function(n1,n2) {
	var crossesCount = 0;
	for(var i=0;i < n1.predeccessors.length;i++) {
		for(var j=0;j < n2.predeccessors.length;j++) {
			if((n1.indexInLayer > n2.indexInLayer 
				&& n1.predeccessors[i].indexInLayer < n2.predeccessors[j].indexInLayer)
				||
				(n1.indexInLayer < n2.indexInLayer 
				&& n1.predeccessors[i].indexInLayer > n2.predeccessors[j].indexInLayer)
				) {
				crossesCount++;
			}
		}
	}
	return crossesCount;
  },
  _printCrossCountMatrix : function(matrix,layer) {
	console.log("cross count matrix for layer "+layer.index);
	console.log("------------------------------------");
	var str = "  ";
	for(var i=0;i < layer.nodes.length;i++) {
		str += (layer.nodes[i].isDummy ? '-':layer.nodes[i].name) + " ";
	}
	console.log(str);
	for(var i=0;i < matrix.length;i++) {
		var str = (layer.nodes[i].isDummy ? '-':layer.nodes[i].name) + " ";
		for(var j=0;j < matrix[i].length;j++) {
			str += matrix[i][j]+" ";
		}
		console.log(str);
	}
	console.log("");
  },
  _orderNodesToMinimizeEdgeCrossings : function() {
	this._sortEdgesByOrderInLayer(graph.root);
	for(var i=0;i<graph.layers.length-1;i++) {
		var crossCountMatrix = this._createCrossCountMatrix(graph.layers[i],graph.layers[i+1]);
		//this._printCrossCountMatrix(crossCountMatrix,graph.layers[i+1]);
		this._orderLayerNodes(i+1,crossCountMatrix);
	}
	this._sortEdgesByOrderInLayer(graph.root);
  },
  _orderLayerNodes : function(layerIndex,crossCountMatrix) {
	var switched;
	do {
		switched = false;
		for(var i=0;i < graph.layers[layerIndex].nodes.length-1;i++) {
			if(crossCountMatrix[i][i+1] > crossCountMatrix[i+1][i]) {
				this._switchNodes(layerIndex,i,i+1,crossCountMatrix);
				crossCountMatrix = this._createCrossCountMatrix(graph.layers[layerIndex-1],graph.layers[layerIndex]);
				switched = true;
			}
		}
	}while(switched == true);
	return crossCountMatrix;
  },
  _switchNodes : function(layerIndex,n1Index,n2Index,crossCountMatrix) {
	var layer = graph.layers[layerIndex];
	var tmp = layer.nodes[n1Index];
	layer.nodes[n1Index] = layer.nodes[n2Index];
	layer.nodes[n2Index] = tmp;
	layer.nodes[n1Index].indexInLayer = n1Index;
	layer.nodes[n2Index].indexInLayer = n2Index;
	tmp = crossCountMatrix[n1Index][n2Index];
	crossCountMatrix[n1Index][n2Index] = crossCountMatrix[n2Index][n1Index];
	crossCountMatrix[n2Index][n1Index] = tmp;
  },
  flashNodeColor : function(nodeName, color) {
  	this.setNodeColor(nodeName,'red');
  	var that = this;
 	setTimeout(function() {
 		that.setNodeColor(nodeName,'green');
 	},1000);
  }
  
};
}