import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';
import {browserHistory} from 'react-router';

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

  redirect(to) {
    browserHistory.push({
       pathname: to
       
    });
  }

  render () {
    return (
      

      <div>
          <h1>
            <img id='logo' alt='logo' src={require("../images/MAStemLogoBIG.png")} style={logoStyle} />
            <Dropdown id='dropdown' icon="sidebar" style={DropdownStyle}>
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