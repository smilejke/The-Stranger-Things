import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import ActorsPageContent from '../ActorsInfoPage/Content/Content.js';
import ActorsPageHeader from '../ActorsInfoPage/Header/Header.js';
import GreetingsPage from '../FirstGreetingsPage/Content/Content.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  hoverSideBarOn,
  hoverSideBarOff,
  showActorsPageContent,
  showGreetingsPageContent,
} from '../../store/Layout/actions.js';

const { Content, Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class mainLayout extends React.Component {
  render() {
    const {
      pages: { greetings, actors },
      sideBarCollapsed,
      hoverOn,
      hoverOff,
      showActorsContent,
      showGreetingsContent,
    } = this.props;

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
            <ActorsPageHeader flag={this.props.pages} />
          </Header>
          <Content>
            {greetings ? <GreetingsPage /> : null}
            {actors ? <ActorsPageContent /> : null}
          </Content>

          <Footer className='actors-layout-footer'>
            The Stranger Things ©2020 Created by Vadim Melnikov
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const putStateToAppProps = (state) => {
  return {
    pages: {
      greetings: state.layoutReducer.pages.greetings,
      actors: state.layoutReducer.pages.actors,
      watch: state.layoutReducer.pages.watch,
    },
    sideBarCollapsed: state.layoutReducer.sideBarCollapsed,
  };
};

const putActionsToActorsProps = (dispatch) => {
  return {
    hoverOn: bindActionCreators(hoverSideBarOn, dispatch),
    hoverOff: bindActionCreators(hoverSideBarOff, dispatch),
    showActorsContent: bindActionCreators(showActorsPageContent, dispatch),
    showGreetingsContent: bindActionCreators(showGreetingsPageContent, dispatch),
  };
};

export default connect(putStateToAppProps, putActionsToActorsProps)(mainLayout);
