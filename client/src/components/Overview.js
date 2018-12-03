import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Button, Image, Icon, } from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'
import * as d3 from "d3";

export class Overview extends Component {
  constructor () {
    super()
    this.state = {}
    this.renderSVG = this.renderSVG.bind(this)
  }

  componentDidMount() {
    this.renderSVG();
    fetch('http://mass-stem-backend.herokuapp.com/resources')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  renderSVG () {
    var svg = d3.select("#bubbles").append("svg")
                .attr("width", 1200)
                .attr("height", 600);


    var positions = [{x: 500, y: 150,  r: 90, fill: '#F84908', name: "Our Vision"},
                     {x: 150, y: 90,   r: 80, fill: '#BE2113', name: "Design", name2: "Your", name3: "Future"},
                     {x: 110, y: 300 , r: 90, fill: '#F89208', name: "Testimonials"},
                     {x: 900, y: 175 , r: 85, fill: '#C162F4', name: "After", name2: "School", name3: "Programs"},
                     {x: 700, y: 360 , r: 85, fill: '#09C9F7', name: "College", name2: "Certificate", name3: "Programs"},
                     {x: 920, y: 400 , r: 85, fill: '#F03C66', name: "Summer", name2: "Programs"},
                     {x: 400, y: 400 , r: 85, fill: '#19F221', name: "Build", name2: "Your", name3: "Path"},
                     ]      
                     
    var lines = [{ x1: positions[0].x, x2: positions[1].x,
                   y1: positions[0].y, y2: positions[1].y},
                  {x1: positions[0].x, x2: positions[2].x,
                   y1: positions[0].y, y2: positions[2].y},
                  {x1: positions[0].x, x2: positions[3].x,
                   y1: positions[0].y, y2: positions[3].y},
                  {x1: positions[3].x, x2: positions[4].x,
                   y1: positions[3].y, y2: positions[4].y},
                  {x1: positions[4].x, x2: positions[5].x,
                   y1: positions[4].y, y2: positions[5].y},
                  {x1: positions[5].x, x2: positions[3].x,
                   y1: positions[5].y, y2: positions[3].y},
                  {x1: positions[0].x, x2: positions[6].x,
                   y1: positions[0].y, y2: positions[6].y}
                  ]

    for (var i = 0; i < lines.length; i++) {
      svg.append("line")
         .attr("x1", lines[i].x1)
         .attr("x2", lines[i].x2)
         .attr("y1", lines[i].y1)
         .attr("y2", lines[i].y2)
         .style("stroke", "white")          
         .style("stroke-width", 2)

    }
  

  var circleGroup = svg.selectAll("g")
                    .data(positions)
                    .enter().append('g');

  circleGroup.append("circle")
             .attr("cx", d => {return d.x + 6})
             .attr("cy", d => {return d.y + 4})
             .attr("r", d => {return d.r})
             .attr("fill", "#000")
             .attr("fill-opacity", "0.7")
             .attr("id", (d, i) => {return "circle-s"+ i});
  circleGroup.append("circle")
             .attr("cx", d => {return d.x})
             .attr("cy", d => {return d.y})
             .attr("r", d => {return d.r})
             .attr("fill", d => {return d.fill})
             .attr("id", (d, i) => {return "circle"+ i});
    
    // Name 1 append
    var textGroup = circleGroup.append("text")
    .attr("x", d => {
      
      
      if ('name2' in d) {
        if (d.name.length > 5) {
        return d.x - 36
      } else {
        return d.x - 30
      }
      } else {
        if (d.name.length > 10) {
          return d.x - 73
        } else {
          return d.x - 60 
        }}})
    .attr("y", d => {
      if ('name2' in d && !('name3' in d)) {
        return d.y - 10
      }
      else if ('name2' in d) {
        return d.y - 25;
      } else {
        return d.y + 10;
      }})
    .attr("id", (d, i) => {return "text"+ i})
    .style("font-size", "33px")
    .style("font-family", "'Caveat Brush', cursive")
    .style("fill", "white");

    textGroup.append("tspan")
    .text(d => {return d.name})
    .append ("tspan");

    // Name 2 append
    textGroup.append("tspan")
    .attr("x", (d, i) => {
      if ('name2' in d) {
        var str = d.name2;
        var strLen = str.length;
        if (strLen > 7) {
          return d.x - 65
        } else if (strLen > 5) {
          return d.x - 45
        } else {
          return d.x - 30
        }
      } else {
        return d.x - 35
      }
    })
    .attr("y", (d, i) => {
      if ('name2' in d && !('name3' in d)) {
        return d.y + 30
      }
      else {
      return d.y + 15}
    })
    .text(d => {return d.name2})
    .append("tspan");

    // Name 3 append
    textGroup.append("tspan")
    .attr("id", (d, i) => 
      {return "name3-" + i})
    .attr("x", (d, i) => {
      if ('name3' in d) {
        var str = d.name3;
        var strLen = str.length;
        console.log(str + " " + strLen);
        if (strLen > 6) {
          return d.x - 55
        } else if (strLen > 5) {
          return d.x - 43
        } else {
          return d.x - 33
        }
      } else {
        return d.x - 35
      }
    })
    .attr("y", d => {return d.y + 50})
    .text(d => {return d.name3})
    .append("tspan"); 

    var invisCircleGroup = circleGroup.append("circle")
                           .attr("cx", d => {return d.x})
                           .attr("cy", d => {return d.y})
                           .attr("r", d => {return d.r})
                           .attr("fill", d => {return d.fill})
                           .attr("fill-opacity", "0");


     function mouseOver(obj) {
      obj.on('mouseover', function(d, i) {
        d3.select("#circle"+i).transition()
        .ease(d3.easeElastic)
        .duration("500")
        .attr("r", d.r + 10);
        d3.select("#circle-s"+i).transition()
        .ease(d3.easeElastic)
        .duration("500")
        .attr("r", d.r + 10);
        d3.select("#text"+ i).transition()
        .ease(d3.easeCubicOut)
        .duration("200")
        .attr("transform", "translate(-5)")
        .style("font-size", "38");
        // d3.select("#name1-" + i).transition()
        // .duration("200")
        // .attr("transform", "translate(200)");
      }).on('mouseout', function(d, i) {
        d3.select("#circle"+i).transition()
        .ease(d3.easeQuad)
        .duration("200")
        .delay("100")
        .attr("r", d.r);
        d3.select("#circle-s"+i).transition()
        .ease(d3.easeQuad)
        .duration("200")
        .delay("100")
        .attr("r", d.r);
        d3.select("#text"+i).transition()
        .ease(d3.easeCubicOut)
        .duration("400")
        .delay("100")
        .attr("transform", "translate(5)")
        .style("font-size", "33");
        
      })
    }
    mouseOver(invisCircleGroup);
  }

  render () {
    return (
    	<div>
      	<Button size='medium' id='main-btn'>
              <Button.Content visible> Build Your Pathway To STEM 
              <Image id='puzzle' src={require('../images/puzzle.svg')} /> </Button.Content>
          </Button>
          <Image id='expl' src={require('./STEMexplosion.svg')} size='medium'/>
          <a href="#bubbles-sec"><Icon name='arrow down' id="down-arrow" size='huge'/></a>
          <div id='bubbles'>
              <ScrollableAnchor id={'bubbles-sec'}>
                <h1></h1>
              </ScrollableAnchor>

          </div>
      </div>
      

    )
  }
}
