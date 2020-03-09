import React from 'react';
import PhotoBlockContainer from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import PageHeader from './Header/Header.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { hoverSideBar, getActorsData } from '../../store/Layout/actions.js';
import Sidebar from './SideSlider/slider.js';
import Loading from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';

const { Content, Header, Footer } = Layout;

function MainLayout(props) {
  const { sideBarCollapsed, actorCards, hoverSideBar, loading, actor } = props;

  const dispatch = useDispatch();

  const getActors = () => {
    dispatch(getActorsData(loading, 'http://localhost:3001/actors'));
  };

  const filterActions = {
    getActors,
    getMaincast: () => {
      dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=maincast'));
    },
    getSecondaryActors: () => {
      dispatch(getActorsData(loading, 'http://localhost:3001/actors?majority=secondary'));
    },
    getMaleActors: () => {
      dispatch(getActorsData(loading, 'http://localhost:3001/actors?gender=Male'));
    },
    getFemaleActors: () => {
      dispatch(getActorsData(loading, 'http://localhost:3001/actors?gender=Female'));
    },
  };

  const sidebarOptions = {
    collapsedStatus: sideBarCollapsed,
    hoverSideBar,
    getActorsData: getActors,
    routes: {
      home: '/',
      actors: '/actors/all',
      news: '/news',
    },
  };
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
              <Route path='/actors'>
                {<PhotoBlockContainer actors={actorCards} actions={filterActions} />}
              </Route>
              <Route path='/profile'>{<Profile actor={actor} />}</Route>
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
    actor: state.getActor.actor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverSideBar: bindActionCreators(hoverSideBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
