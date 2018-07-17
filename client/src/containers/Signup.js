import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';

class Signup extends React.Component {
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

    handleOnSignup = (e) => {
        e.preventDefault();
        const { signup, history } = this.props;
          if (signup(this.state)) {
            history.push('/account')
        } else {
            window.alert("Sorry, something went wrong. Please try signing up again.")
        }
    }

    render() {
        return (
          <div id="signup">
              <h2>Sign Up</h2>
            <form onSubmit={this.handleOnSignup}>
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
                    value="Create Account"
                />
            </form>
          </div>
        );
    }
}
export default connect(null, {signup})(Signup);
