import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import AdvertisingBanner from '../../AdvertisingBanner/AdvertisingBanner.js';

const { Header, Content, Footer } = Layout;

class GreetingsPage extends React.Component {
  render() {
    return (
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px', textAlign: 'center' }}>
            <Menu.Item key='firstPageMenuItem1'>nav 1</Menu.Item>
            <Menu.Item key='firstPageMenuItem2'>nav 2</Menu.Item>
            <Menu.Item key='firstPageMenuItem3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24 }}>
            <AdvertisingBanner />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          The Stranger Things ©2020 Created by Vadim Melnikov
        </Footer>
      </Layout>
    );
  }
}

export default GreetingsPage;
