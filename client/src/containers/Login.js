import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/userActions';
import { Button, Alert } from 'antd';

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
        history.push('/')
        window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }

  validate = (email, password) => {
  const errors = [];
    if (this.state.email === '') {
      errors.push("Email can not be blank");
    }
    if (this.state.password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }
  return errors;
}

  render() {
    return (
      <div className="login">
        <p>Log In</p>
          <form onSubmit={this.handleOnLogin}>
            <div>
              {this.state.errors.map(error =>
              <Alert
                message={error}
                type="error"
                closable
                key={error}
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
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
export default connect(null, {authenticate})(Login);
