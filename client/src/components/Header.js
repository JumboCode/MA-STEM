import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Dropdown, Image } from 'semantic-ui-react'

const logo = () => (
  <Image
  	src='https://jumbocode-ma-stem.slack.com/files/UCZ7QHGV7/FDQ4C9L5A/mastemlogobig.png'
  	size='small' 
  />

export class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Dropdown icon='sidebar' textAlign='right'>
        <Dropdown.Menu>
          <Dropdown.Item text='Resources' />
          <Dropdown.Item text='Admin' />
          <Dropdown.Item text='About Us' />
          <Dropdown.Item text='Help' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}