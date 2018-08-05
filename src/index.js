import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './CSS/index.css'

import Happy from './components/Happy'
import Sleepy from './components/Sleepy'
import Guilty from './components/Guilty'

// your code goes here
class Home extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/happy'>Happy</Link>
            </li>
            <li>
              <Link to='/guilty'>Guilty</Link>
            </li>
            <li>
              <Link to='/sleepy'>Sleepy</Link>
            </li>
          </ul>
          <Route path='/' />
          <Route path='/happy' component={Happy} />
          <Route path='/guilty' component={Guilty} />
          <Route path='/sleepy' component={Sleepy} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
