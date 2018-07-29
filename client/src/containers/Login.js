import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/userActions';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: []
    };
  }

  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleOnLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const errors = this.validate(email, password);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
    const { authenticate, history } = this.props;
      if (authenticate(this.state)) {
        history.push('/beers')
      } else {
        window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }
  validate = (name, email, password) => {
  const errors = [];
    if (this.state.email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (this.state.email.split('').filter(x => x === '@').length !== 1) {
      errors.push("Email should contain a @");
    }
    if (this.state.email.indexOf('.') === -1) {
      errors.push("Email should contain at least one dot");
    }
    if (this.state.password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
  return errors;
}

  render() {
    return (
      <div id="login">
        <h2>Log In</h2>
          <form onSubmit={this.handleOnLogin}>
            {this.state.errors.map(error => (
              <p id="errors" key={error}>Error: {error}</p>
            ))}
            <label htmlFor="email">Email: </label>
              <br />
          <input
            name="email"
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            />
            <br /><br />
          <label htmlFor="password">Password:</label>
            <br />
          <input
            name="password"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br /><br />
          <input
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    );
  }
}
export default connect(null, {authenticate})(Login);
