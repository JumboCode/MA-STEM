import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Button, Image, Icon, } from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'
// import BarChart from "./BarChart.js";

export class Overview extends Component {
  constructor () {
    super()
    console.log("overview")
    this.state = {}
  }
  render () {
    console.log("hello")
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
                <h1>text</h1>
                
                  
               
              </ScrollableAnchor>
          </div>
      </div>
      

    )
  }
}
