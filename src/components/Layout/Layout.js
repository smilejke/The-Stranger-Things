import { Layout, Menu, Icon } from 'antd';
import React from 'react';
// import AdvertisingBanner from '../AdvertisingBanner/AdvertisingBanner.js';
import PhotoBlock from '../ActorsPhotoBlock/PhotoBlock.js';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      photoBlock: false,
    };
    this.renderPhoto = this.renderPhoto.bind(this);
  }

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  renderPhoto() {
    return !this.state.photoBlock ? this.setState({ photoBlock: !this.state.photoBlock }) : null;
  }
  render() {
    return (
      <Layout style={{ minHeight: '200vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onMouseEnter={this.onCollapse}
          onMouseLeave={this.onCollapse}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key='2' onClick={this.renderPhoto}>
              <Icon type='star' />
              <span>Actors</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <Icon type='team' />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9'>
              <Icon type='file' />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.state.photoBlock ? <PhotoBlock /> : ''}
            </div>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <AdvertisingBanner />
            </div> */}
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
