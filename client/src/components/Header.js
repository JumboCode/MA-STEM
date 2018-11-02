import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Container, Divider, Dropdown, Image } from 'semantic-ui-react'

const src='.../client/public/images/MAStemLogoBIG.png'

export class HeaderBar extends Component {
  constructor () {
    super()
    console.log("yo")
  }

  render () {
    
    
    return (
      <Container>
        <div style={{ textAlign: "right" }}>
          <Dropdown icon='sidebar'>
            <Dropdown.Menu>
              <Dropdown.Item text='Resources' />
              <Dropdown.Item text='Admin' />
              <Dropdown.Item text='About Us' />
              <Dropdown.Item text='Help' />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    )
  }
}