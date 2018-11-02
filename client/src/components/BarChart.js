import React, {Component} from 'react';
import * as d3 from "d3";
	
class BarChart extends Component {
	componentDidMount() {
    	this.drawChart();
  	}
  	drawChart() {
  	  var bubbleChart = function () {
  	  	var width = 600;
  	  	var height = 400;

  	  	function chart(selection){
  	  		//omw 
  	  	 }

  	  	chart.width = function(value) {
  	  		if (!arguments.length) { return width; }
  	  		width = value;
  	  		return chart;
  	  	}

  	  	chart.height = function(value) {
  	  		if (!arguments.length) { return height; }
  	  		height = value;
  	  		return chart;
  	  	}
  	  	return chart;
  	  }
  	  var chart = bubbleChart().width(300).height(200);
  	  
	}

	render() {
		return <div id={"#" + this.props.id}></div>
	}


}

export default BarChart;