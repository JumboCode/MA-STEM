import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
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
      <Container text>
        <Header as='h2' icon textAlign='center'>
          <Icon name='cocktail' circular />
          <Header.Content>
            MA STEM
          </Header.Content>
        </Header>
      </Container>
    )
  }

  /* example API endpoint calls using fetch */
  // getDrinks () {
  //   this.fetch('api/drinks')
  //     .then(drinks => {
  //       this.setState({drinks: drinks});
  //     })
  //     .catch(err => {
  //       console.log(err); 
  //     })
  // }

  // getDrink (id) {
  //   this.fetch(`api/drinks/${id}`)
  //     .then(drink => this.setState({drink: drink}))
  // }

  render () {    
    return (
      <div style={{ backgroundColor: "white" }}>
        {this.renderHeader()}
        {this.renderPageBody()}
        <Overview/>
      </div>
    )
  }
}

export default App
