import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { logout } from '../actions/userActions';

class Navigation extends Component {

  handleLogout = (e) => {
      e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
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
              <li className="ant-menu-item">
                <button onClick={(e) => this.handleLogout(e)}>Log Out</button>
              </li>
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
                <li className="ant-menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="ant-menu-item">
                  <a href="/login">Login</a>
                </li>
                <li className="ant-menu-item">
                  <a href="/signup">Signup</a>
                </li>
              </Menu>
            </Header>
            <Content>

            </Content>
          </Layout>
      </div>

  )

  return (
    <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
