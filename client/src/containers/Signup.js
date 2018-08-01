import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';
import { Button, Alert } from 'antd';

class Signup extends React.Component {
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

  handleOnSignup = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const errors = this.validate(email, password);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
    const { signup, history } = this.props;
      if (signup(this.state)) {
        history.push('/account')
      } else {
      window.alert("Sorry, something went wrong. Please try signing up again.")
      }
  }

  validate = (email, password) => {
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
      <div className="login">
        <p>Sign Up</p>
          <form onSubmit={this.handleOnSignup}>
            <div>
              {this.state.errors.map(error =>
              <Alert
                message={error}
                type="error"
                closable
             />
              )}
            </div>
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
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            >
            Create Account
          </Button>
        </form>
      </div>
      );
    }
}
export default connect(null, {signup})(Signup);
