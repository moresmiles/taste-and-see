import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import '../App.css';
import Welcome from '../components/Welcome';
import UserShow from '../components/UserShow';
import Signup from './Signup';
import Navigation from './Navigation'
import BeersContainer from './BeersContainer';
import Login from './Login'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    const {isAuthenticated, user} = this.props
    const loggedOut = (
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    )
    const loggedIn = (
      <div>
        <Route path="/account" render={() => <UserShow user={user} />} />
        <Route path="/beers" component={BeersContainer} />
      </div>
    )
    return (
      <Router>
        <div className="App">
          <Navigation isAuthenticated={isAuthenticated} />
          <div>
            {isAuthenticated ? loggedIn : loggedOut}
          <br />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.user.isAuthenticated,
      user: state.user.currentUser
  }
}

export default connect(mapStateToProps, {})(App);
