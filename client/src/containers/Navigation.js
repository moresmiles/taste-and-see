import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Welcome from '../components/Welcome'

class Navigation extends Component {

  render () {
    const { Header, Content, Footer } = Layout;

    const loggedInNav = (
      <div>
      </div>
    );

    const welcomeNav = (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                >
                <li className="ant-menu-item" role="menuitem">
                  <a href="/"><span>Home</span></a>
                </li>
                <li className="ant-menu-item" role="menuitem">
                  <a href="/login"><span>Login</span></a>
                </li>
                <li className="ant-menu-item" role="menuitem">
                  <a href="/signup"><span>Signup</span></a>
                </li>
              </Menu>
            </Header>
            <Content>
              <Welcome />
            </Content>
          </Layout>
      </div>

  )

  return (
    <div>{this.props.isAuthenticated ? loggedInNav : welcomeNav}</div>
    )
  }
}

export default Navigation;
