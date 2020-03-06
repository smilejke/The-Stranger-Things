import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import PhotoBlockContainer from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import ActorsPageHeader from '../ActorsInfoPage/Header/Header.js';
// import GreetingsPage from '../FirstGreetingsPage/Content/Content.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { hoverSideBar, getActorsData } from '../../store/Layout/actions.js';
import Loading from './loadingEffect/loading.js';

const { Content, Header, Footer, Sider } = Layout;

function MainLayout(props) {
  const { sideBarCollapsed, actorCards, hoverSideBar, loading } = props;

  const dispatch = useDispatch();
  const getActors = () => {
    dispatch(getActorsData(loading, 'http://localhost:3001/actors'));
  };
  // const getMaincast = () => {
  //   dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=maincast'));
  // };
  //  const getSecondaryActors = () => {
  //   dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=secondary'));
  // };

  console.log(props);
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
          <Menu.Item key='layoutMenuItem1'>
            <Icon type='pie-chart' />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item
            key='layoutMenuItem2'
            onClick={() => {
              getActors();
            }}
          >
            <Icon type='star' />
            <span>Actors</span>
          </Menu.Item>
          <Menu.Item key='layoutMenuItem3'>
            <Icon type='file' />
            <span>Watch</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className='actors-layout-header'>
          <ActorsPageHeader text={'Welcome to Hawkins'} />
        </Header>

        <Content>
          {/* <GreetingsPage />  */}
          {loading ? <Loading /> : ''}
          <PhotoBlockContainer actors={actorCards} />
        </Content>

        <Footer className='actors-layout-footer'>
          The Stranger Things ©2020 Created by Vadim Melnikov
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    actorCards: state.layout.actorCards,
    sideBarCollapsed: state.layout.sideBarCollapsed,
    loading: state.layout.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverSideBar: bindActionCreators(hoverSideBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
