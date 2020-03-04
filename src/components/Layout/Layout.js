import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import ActorsPageContent from '../ActorsInfoPage/Content/Content.js';
import ActorsPageHeader from '../ActorsInfoPage/Header/Header.js';
import GreetingsPage from '../FirstGreetingsPage/Content/Content.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  hoverSideBar,
  showActorsPageContent,
  showGreetingsPageContent,
} from '../../store/Layout/actions.js';

const { Content, Header, Footer, Sider } = Layout;

class mainLayout extends React.Component {
  render() {
    const {
      pages: { greetings, actors },
      sideBarCollapsed,
      hoverSideBar,
      showActorsContent,
      showGreetingsContent,
    } = this.props;

    return (
      <Layout className='actors-layout-heigth'>
        <Sider
          collapsible
          collapsed={sideBarCollapsed}
          onCollapse={() => {
            hoverSideBar(!sideBarCollapsed);
          }}
        >
          <div className='logo' />
          <Menu theme='dark' mode='inline'>
            <Menu.Item
              key='layoutMenuItem1'
              onClick={() => {
                showGreetingsContent(!actors);
              }}
            >
              <Icon type='pie-chart' />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item
              key='layoutMenuItem2'
              onClick={() => {
                showActorsContent(!actors);
              }}
            >
              <Icon type='star' />
              <span>Actors</span>
            </Menu.Item>
            <Menu.Item key='layoutMenuItem3'>
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

const mapStateToProps = (state) => {
  return {
    pages: {
      greetings: state.layoutReducer.pages.greetings,
      actors: state.layoutReducer.pages.actors,
      watch: state.layoutReducer.pages.watch,
    },
    sideBarCollapsed: state.layoutReducer.sideBarCollapsed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverSideBar: bindActionCreators(hoverSideBar, dispatch),
    showActorsContent: bindActionCreators(showActorsPageContent, dispatch),
    showGreetingsContent: bindActionCreators(showGreetingsPageContent, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mainLayout);
