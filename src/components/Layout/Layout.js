import { Layout } from 'antd';
import React from 'react';
import PhotoBlockContainer from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import PageHeader from './Header/Header.js';
// import GreetingsPage from '../FirstGreetingsPage/Content/Content.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { hoverSideBar, getActorsData } from '../../store/Layout/actions.js';
import Sidebar from './SideSlider/slider.js';
import Loading from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const { Content, Header, Footer } = Layout;

function MainLayout(props) {
  const { sideBarCollapsed, actorCards, hoverSideBar, loading } = props;

  const dispatch = useDispatch();
  const getActors = () => {
    dispatch(getActorsData(loading, 'http://localhost:3001/actors'));
  };

  const sidebarOptions = {
    collapsedStatus: sideBarCollapsed,
    hoverSideBar,
    getActorsData: getActors,
    routes: {
      home: '/',
      actors: '/actors',
      news: '/news',
    },
  };
  // const getMaincast = () => {
  //   dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=maincast'));
  // };
  //  const getSecondaryActors = () => {
  //   dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=secondary'));
  // };

  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        <Sidebar sidebarOptions={sidebarOptions} />
        <Layout>
          <Header className='actors-layout-header'>
            <Switch>
              <Route path='/news'>{<PageHeader text={'Serial news'} />}</Route>
              <Route path='/actors'>{<PageHeader text={'The Stranger things cast'} />}</Route>
              <Route path='/'>{<PageHeader text={'Welcome to Hawkins!'} />}</Route>
            </Switch>
          </Header>

          <Content>
            <Switch>
              {loading ? <Loading /> : ''}
              <Route path='/news'>{null}</Route>
              <Route path='/actors'>{<PhotoBlockContainer actors={actorCards} />}</Route>
              <Route path='/'>{null}</Route>
            </Switch>
          </Content>

          <Footer className='actors-layout-footer'>
            The Stranger Things ©2020 Created by Vadim Melnikov
          </Footer>
        </Layout>
      </Layout>
    </Router>
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
