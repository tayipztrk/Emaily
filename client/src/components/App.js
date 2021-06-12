import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './App.css';

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Header/>
            <div className="grid">
              <Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
