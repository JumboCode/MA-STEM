import React, { Component } from 'react'
import { Container, Header, Segment, Button, Image, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { Link, Switch, Route, Router } from "react-router-dom";
import { StemPathways } from './StemPathways'
import { CommunityResources } from './CommunityResources'
import { StemProfessionals } from './StemProfessionals'
import { Overview } from './Overview'
import history from "../lib/history";


class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {}

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => {console.log(response)})
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  
  // render desired page
  renderPageBody() {
    return (
      <Container style={{ minHeight: "100vh" }}>
        <Router history={history}>
            <Switch>
              <Route path="/resources" exact component={CommunityResources} />
              <Route path="/professionals" exact component={StemProfessionals} />
              <Route path="/pathways" exact component={StemPathways} />
              <Route path="/" component={Overview} />
            </Switch>
          </Router>
      </Container>
    );
  }

  renderHeader() {
    return (
        <div id="menu-bar">
          <h1 id="ma-stem-txt">MA Stem</h1>
          <Icon name='bars' size='big' id="menu-icon"/>
        </div>
    )
  }

  render () {  

    return (
      <div id="landing-image-1">
        <div id="landing-image-2">
          {this.renderHeader()}
          {this.renderPageBody()}
        </div>
      </div>
    )
  }
}

export default App
