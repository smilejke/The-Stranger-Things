import { Layout, Menu, Icon, Typography } from 'antd';
import React from 'react';
import PhotoBlock from '../ActorsPhotoBlock/PhotoBlock.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hoverSideBarOn, hoverSideBarOff, showActorsPageContent } from '../../../store/actions.js';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

class ActorsPageLoyout extends React.Component {
  render() {
    const { onCollapse, isPageShown, hoverOn, hoverOff, showContent } = this.props;

    return (
      <Layout className='actors-layout-heigth'>
        <Sider
          collapsible
          collapsed={onCollapse}
          onMouseEnter={() => {
            hoverOn(!onCollapse);
          }}
          onMouseLeave={() => {
            hoverOff(!onCollapse);
          }}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['2']} mode='inline'>
            <Menu.Item key='actorPageMenuItem1'>
              <Icon type='pie-chart' />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item
              key='actorPageMenuItem2'
              onClick={() => {
                showContent(!isPageShown);
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
          <div>
            {isPageShown ? (
              <Header className='actors-layout-header'>
                <Title level={2} className='actors-layout-header-title'>
                  The Stranger Things Cast
                </Title>
              </Header>
            ) : (
              ''
            )}
          </div>

          <Content className='actors-layout-contentBox'>
            <div className='photoblock'>{isPageShown ? <PhotoBlock /> : ''}</div>
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

const putStateToActorsProps = (state) => {
  return {
    onCollapse: state.sideBarCollapsed,
    isPageShown: state.actorsPageShowed,
  };
};

const putActionsToActorsProps = (dispatch) => {
  return {
    hoverOn: bindActionCreators(hoverSideBarOn, dispatch),
    hoverOff: bindActionCreators(hoverSideBarOff, dispatch),
    showContent: bindActionCreators(showActorsPageContent, dispatch),
  };
};

export default connect(putStateToActorsProps, putActionsToActorsProps)(ActorsPageLoyout);
