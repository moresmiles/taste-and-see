import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from '../components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
      </div>
    )
    return (
      <Router>
        <div className="App">
        </div>
      </Router>
    );
  }
}

export default App;
const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.user.isAuthenticated,
      user: state.user.currentUser
  }
}

export default connect(mapStateToProps, {})(App);
