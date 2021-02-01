import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'
import Index from './components/Index/Index'
import Contact from './components/Contact/Contact'
class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
