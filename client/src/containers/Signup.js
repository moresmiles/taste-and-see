import React from 'react';

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
export default Signup;
