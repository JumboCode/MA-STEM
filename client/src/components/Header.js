import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import logo from "../images/MAStemLogoBIG.png";

// export const history = createHashHistory()

export class HeaderBar extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div style={{ display:"flex", width: "400px", paddingTop:"10px", paddingLeft:"30px"}}>
          <h1>
            <img src={logo} alt="Logo" width={250} />
          </h1>
          <h1 style={{align: "right", paddingTop:"25px", paddingLeft: "850px"}}>
            <Dropdown icon="sidebar">
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
}