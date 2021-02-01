import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'
import Index from './components/Index/Index'
import Contact from './components/Contact/Contact'
class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/work' component={Index} />
          <Route path='/portofolio' component={Index} />
          <Route path='/Resume' component={Index} />
          <Route path='/about' component={Index} />

          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
