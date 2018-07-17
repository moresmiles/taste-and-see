import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/userActions';

class Login extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        email: '',
        password: ''
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
        const { authenticate, history } = this.props;
          if (authenticate(this.state)) {
              history.push('/account')
        } else {
            window.alert("Sorry, something went wrong. Please try logging in again.")
        }
    }

    render() {
        return (
            <div id="login">
                <h2>Log In</h2>
                <form onSubmit={this.handleOnLogin}>
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
