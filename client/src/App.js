import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {active: false}
    this.getDrinks = this.getDrinks.bind(this)
    this.getDrink = this.getDrink.bind(this)
  }

  componentDidMount () {
    this.getDrinks()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => {console.log(response)})
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getDrinks () {
    this.fetch('api/drinks')
      .then(drinks => {
        this.setState({drinks: drinks})
      })
  }

  getDrink (id) {
    this.fetch(`api/drinks/${id}`)
      .then(drink => this.setState({drink: drink}))
  }

  render () {
    let {drinks, drink, active} = this.state
    return active? (
      <Container text>
          <Header as='h2' icon textAlign='center'>
          <Icon name='cocktail' circular />
          <Header.Content>
            MA STEM
          </Header.Content>
        </Header>
        <Button.Group fluid widths={drinks.length}>
          {Object.keys(drinks).map((key) => {
            return <Button active={drink && drink.id === drinks[key].id} fluid key={key} onClick={() => this.getDrink(drinks[key].id)}>
              {drinks[key].title}
            </Button>
          })}
        </Button.Group>
        <Divider hidden />
        {drink &&
          <Container>
            <Header as='h2'>{drink.title}</Header>
            {drink.description && <p>{drink.description}</p>}
            {drink.ingredients &&
              <Segment.Group>
                {drink.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
              </Segment.Group>
            }
            {drink.steps && <p>{drink.steps}</p>}
          </Container>
        }
      </Container>
    ): ( <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
        <Button onClick={this.setState({active:true})}>hello</Button>
      </Dimmer>
      </Container>
    )
  }
}

export default App
