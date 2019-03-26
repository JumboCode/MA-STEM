import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Dropdown, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Media from "react-media";
import logo from '../images/MAStemLogoBIG.png';
const logoStyle = {
  width: "20vw",
  marginLeft: "10px",
  display: "inline",
};

const DropdownStyle = {
  width: "2.5vw",
  marginTop: "1vw",
  marginRight: "10vw",
  display: "inline",
  float: "right"
};  



export class HeaderBar extends Component {
  constructor () {
    super()
    this.state = {addClass: false}
    this.toggleOverlay = this.toggleOverlay.bind(this)
  }
 toggleOverlay (){
  this.setState({
      addClass: !this.state.addClass
    });
 }
  render () {
    
    
    return (
      
 <Media query="(max-width: 460px)">
          {matches =>
             matches ? (
              <div>
              <h1>
            <img id='logo' alt='logo' src={logo} style={logoStyle} />
         
    <span className="menuButton" id="dropdown" onClick ={this.toggleOverlay.bind(this)}>&#9776;</span>
<div className={this.state.addClass ? 'overlay': 'overlay-data'}>
      <a className="overlay-close" onClick ={this.toggleOverlay.bind(this)}>X</a>
      <nav>
        <ul>
        <Segment.Group>
    <Segment vertical><Link to ={'/resources'} onClick ={this.toggleOverlay.bind(this)}> Our Vision </Link></Segment>
    <hr/>
    <Segment vertical><Link to ={'/admin'} onClick ={this.toggleOverlay.bind(this)}> Design Your Future </Link></Segment>
    <hr/>
    <Segment vertical><Link to ={'/professionals'} onClick ={this.toggleOverlay.bind(this)}> Testimonials </Link></Segment>
   <hr/>
    <Segment vertical><Link to ={'/pathways'} onClick ={this.toggleOverlay.bind(this)}> Build Your Path </Link></Segment>
    <hr/>
 <Segment vertical><Link to ={'/admin'} onClick ={this.toggleOverlay.bind(this)}> College/Certificate Programs </Link></Segment>
    <hr/>
    <Segment vertical><Link to ={'/aboutus'} onClick ={this.toggleOverlay.bind(this)}> After School Programs </Link></Segment>
   <hr/>
    <Segment vertical><Link to ={'/help'} onClick ={this.toggleOverlay.bind(this)}> Summer Programs </Link></Segment>
 
  </Segment.Group>

        </ul>
      </nav>
    </div>
              
      </h1>
</div>
      ) : (

      <div>
          <h1>
            <img id='logo' alt='logo' src={logo} style={logoStyle} />
            <Dropdown id='dropdown' icon="sidebar" style={DropdownStyle}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/resources' text="Resources" />
                <Dropdown.Item as={Link} to='/admin' text="Admin" />
                <Dropdown.Item as={Link} to='/aboutus' text="About Us" />
                <Dropdown.Item as={Link} to='/help' text="Help" />
              </Dropdown.Menu>
            </Dropdown>
          </h1>
      </div> 

      )
    }
    </Media>
    )
  }
}