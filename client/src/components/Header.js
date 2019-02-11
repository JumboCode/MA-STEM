import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";

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
    this.state = {}
  }

  render () {
    return (
      

      <div>
          <h1>
            <img id='logo' alt='logo' src={require("../images/MAStemLogoBIG.png")} style={logoStyle} />
            <Dropdown id='dropdown' icon="sidebar" style={DropdownStyle}>
              <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/resources' text="Resources" />
                  <Dropdown.Item as={Link} to='/admin' text="Admin" />
                  <Dropdown.Item as={Link} to='/professionals' text="TestingTestimonials" />
                  <Dropdown.Item as={Link} to='/help' text="Help" />
                </Dropdown.Menu>
            </Dropdown>
          </h1>
      </div>
    )
  }
}