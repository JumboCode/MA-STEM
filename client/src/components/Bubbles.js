import React, {Component} from 'react';
import * as d3 from "d3";


class Bubbles extends Component {
    componentDidMount() {
        this.drawBubbles();
    }

    drawBubbles() {
        var bubbleChart = function () {
            var width = 960,
            height = 500;


            var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height);

            var numberOfButtons = 4;

            var x = d3.scale.linear()
                .domain([0,numberOfButtons+1])
                .range([0,width]);

            var buttons = d3.range(numberOfButtons).map(function(d,i) {
                return { id: "Our Vision", x: x(i+1), y: height/2 }
            });
            var line = svg.append("line")
                    .style("stroke", "black")
                    .attr("x1", 200)
                    .attr("y1", 250)
                    .attr("x2", 450)
                    .attr("y2", 250);
            var buttonGroup = svg.selectAll("g")
                .data(buttons)
              .enter().append("g")
                .attr("transform", function(d) { return "translate("+d.x+","+d.y+")"; });

            buttonGroup.append("circle")
                .attr("r", 85)
                .attr("fill", '#fc6c6c')
                .attr("cursor", "pointer")
                .on("mouseover", function(d,i) {
                    d3.select(this).transition()
                        .ease("elastic")
                        .duration("500")
                        .attr("r", 95);

                    d3.select("#text"+i).transition()
                        .ease("cubic-out")
                        .duration("200")
                        .attr("y", 12)
                        .attr("font-size", 28)
                        .attr("fill", "#333");
                })
                .on("mouseout", function(d,i) {
                    d3.select(this).transition()
                        .ease("quad")
                        .delay("100")
                        .duration("200")
                        .attr("r", 85);
                    

                    d3.select("#text"+i).transition()
                        .ease("cubic-out")
                        .duration("400")
                        .delay("100")
                        .attr("y", 7)
                        .attr("font-size", 20)
                        .attr("fill", "#FFF");;
                } );

            buttonGroup.append("text")
                .text(function(d) { return d.id; })
                .attr("text-anchor", "middle")
                .attr("y", 7)
                .attr("id", function(d, i) { return "text" + i; })
                .attr("font-size", "20px")
                .attr("fill", "#FFF")
                .attr("pointer-events", "none");
        
        }
        var chart = bubbleChart().width(300).height(200)
    }

}

export default Bubbles;









