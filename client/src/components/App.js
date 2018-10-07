import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { Link, Switch, Route } from "react-router-dom";
import { StemPathways } from './StemPathways'
import { CommunityResources } from './CommunityResources'
import { StemProfessionals } from './StemProfessionals'
import { Overview } from './Overview'


class App extends Component {
  constructor () {
    super()
    this.state = {active: false}
  }

  componentDidMount () {
    console.log("mount");
  }

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
        <Switch>
          <Route path="/resources" component={CommunityResources} />
          <Route path="/professionals" component={StemProfessionals} />
          <Route path="/pathways" component={StemPathways} />
          <Route path="/" component={Overview} />
        </Switch>
      </Container>
    );
  }

  /* example API endpoint calls using fetch */
  // getDrinks () {
  //   this.fetch('api/drinks')
  //     .then(drinks => {
  //       this.setState({drinks: drinks})
  //     })
  // }

  // getDrink (id) {
  //   this.fetch(`api/drinks/${id}`)
  //     .then(drink => this.setState({drink: drink}))
  // }

  render () {
    let {active} = this.state
    return active? (
      <Container text>
          <Header as='h2' icon textAlign='center'>
          <Icon name='cocktail' circular />
          <Header.Content>
            MA STEM
          </Header.Content>
        </Header>
      </Container>
    ): ( <Container text>
      <Dimmer active inverted>
        <Loader content='Loading MA-STEM' />
        <Button onClick={() => {this.setState({active:true})}}>
          Click Me!
        </Button>
      </Dimmer>
      </Container>
    )
  }
}

export default App
