import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { logout } from '../actions/userActions';

class Navigation extends Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/')
  }

  handleOnClick = (arg) => {
    this.props.history.push(`/${arg}`)
  }

  render () {
    const { Header } = Layout;

    const loggedInNav = (
      <div>
        <Layout>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              >
              <Menu.Item className="ant-menu-item"
                onClick={() => this.handleOnClick("beers")}
                >
                Saved Beers
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                onClick={() => this.handleOnClick("beers/new")}
                >
                New Beer
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                 onClick={() => this.handleOnClick("account")}
                 >
                Your Account
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                 onClick={() => this.handleLogout()}
                 >
                Log Out
              </Menu.Item>
            </Menu>
        </Layout>
      </div>
    );

    const welcomeNav = (
      <div>
        <Layout>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item className="ant-menu-item"
                onClick={() => this.handleOnClick("")}
                >
                Home
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                onClick={() => this.handleOnClick("login")}
                >
                Login
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                onClick={() => this.handleOnClick("signup")}
                >
                Signup
              </Menu.Item>
            </Menu>
        </Layout>
      </div>
  )

  return (
    <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
