import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';
import {browserHistory} from 'react-router';
import logo from "../images/MAStemLogoBIG.png";

export class HeaderBar extends Component {
  constructor () {
    super()
    this.state = {}
  }

  redirect(to) {
    browserHistory.push({
       pathname: to
       
    });
  } 

  render () {
    return (
      <div style={{ display:"flex", width: "400", paddingTop:"10", paddingLeft:"30"}}>
          <h1>
            <img src={logo} alt="Logo" width={250} />
          </h1>
          <h1 style={{align: "right", paddingTop:"25", paddingLeft: "850"}}>
            <Dropdown icon="sidebar">
              <Dropdown.Menu>
                <Dropdown.Item text="Resources" onClick={this.redirect('/resources')} />
                <Dropdown.Item text="Admin" onClick={this.redirect('/admin')} />
                <Dropdown.Item text="About Us" onClick={this.redirect('/aboutus')} />
                <Dropdown.Item text="Help" onClick={this.redirect('/help')} />
              </Dropdown.Menu>
            </Dropdown>
          </h1>
      </div>
    )
  }
}