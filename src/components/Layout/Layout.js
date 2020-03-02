import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import ActorsPageContent from '../ActorsInfoPage/Content/Content.js';
import ActorsPageHeader from '../ActorsInfoPage/Header/Header.js';
import GreetingsPage from '../FirstGreetingsPage/Content/Content.js';
import '../../index.css';

const { Content, Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Loyout extends React.Component {
  render() {
    const {
      pages: { greetings, actors },
      actorCards,
      backgroundImages,
      sideBarCollapsed,
      hoverOn,
      hoverOff,
      showActorsContent,
      showGreetingsContent,
    } = this.props.content;

    return (
      <Layout className='actors-layout-heigth'>
        <Sider
          collapsible
          collapsed={sideBarCollapsed}
          onMouseEnter={() => {
            hoverOn(!sideBarCollapsed);
          }}
          onMouseLeave={() => {
            hoverOff(!sideBarCollapsed);
          }}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['2']} mode='inline'>
            <Menu.Item
              key='actorPageMenuItem1'
              onClick={() => {
                showGreetingsContent(!actors);
              }}
            >
              <Icon type='pie-chart' />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item
              key='actorPageMenuItem2'
              onClick={() => {
                showActorsContent(!actors);
              }}
            >
              <Icon type='star' />
              <span>Actors</span>
            </Menu.Item>
            <SubMenu
              key='actorSubMenuItem1'
              title={
                <span>
                  <Icon type='user' />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key='actorPageMenuItem3'>Tom</Menu.Item>
              <Menu.Item key='actorPageMenuItem4'>Bill</Menu.Item>
              <Menu.Item key='actorPageMenuItem5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key='actorSubMenuItem2'
              title={
                <span>
                  <Icon type='team' />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key='actorPageMenuItem6'>Team 1</Menu.Item>
              <Menu.Item key='actorPageMenuItem7'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='actorPageMenuItem8'>
              <Icon type='file' />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='actors-layout-header'>
            <ActorsPageHeader flag={this.props.content.pages} />
          </Header>
          <Content>
            {greetings ? <GreetingsPage data={backgroundImages} /> : null}
            {actors ? <ActorsPageContent data={actorCards} /> : null}
          </Content>

          <Footer className='actors-layout-footer'>
            The Stranger Things ©2020 Created by Vadim Melnikov
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export const COLLAPSE_SIDE_BAR_ON_SHOW = 'COLLAPSE_SIDE_BAR_ON_SHOW';
export const COLLAPSE_SIDE_BAR_ON_HIDE = 'COLLAPSE_SIDE_BAR_ON_HIDE';
export const ACTORS_PAGE_IS_SHOWN = 'ACTORS_PAGE_IS_SHOWN';
export const GREETINGS_PAGE_IS_SHOWN = 'GREETINGS_PAGE_IS_SHOWN';

export default Loyout;
