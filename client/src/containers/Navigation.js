import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { Layout, Menu } from 'antd';
import { logout } from '../actions/userActions';

class Navigation extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  handleOnClick = (arg) => {
    this.props.history.push(`/${arg}`)
  }

  render () {
    const { Header, Content, Footer } = Layout;

    const loggedInNav = (
      <div>
        <Layout>
          <Header style={{width: '100%' }}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              >
              <Menu.Item className="ant-menu-item"
                 onClick={(e) => this.handleLogout(e)}
                 >
                Log Out
              </Menu.Item>
              <Menu.Item className="ant-menu-item"
                 onClick={() => this.handleOnClick("account")}
                 >
                Your Account
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );

    const welcomeNav = (
      <div>
        <Layout>
          <Header style={{width: '100%' }}>
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
          </Header>
        </Layout>
      </div>
  )

  return (
    <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
