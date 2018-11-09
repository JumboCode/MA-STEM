import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Container, Divider, Dropdown, Image, Header } from 'semantic-ui-react'

import logo from "../images/MAStemLogoBIG.png"

export class HeaderBar extends Component {
  constructor () {
    super()
  }

  render () {
    
    
    return (
      <div style={{ display:"flex", width: "400", paddingTop:"10", paddingLeft:"30"}}>
        <div>
          <h1>
            <img src={logo} alt="Logo" width={250} />
          </h1>
        </div>
        <div>
          <h1 style={{align: "right", paddingTop:"50", paddingLeft: "850"}}>
            <Dropdown icon="sidebar" display="inline-block">
              <Dropdown.Menu>
                <Dropdown.Item text="Resources" />
                <Dropdown.Item text="Admin" />
                <Dropdown.Item text="About Us" />
                <Dropdown.Item text="Help" />
              </Dropdown.Menu>
            </Dropdown> 
          </h1>
        </div>  
      </div>
    )
  }
}