import React from 'react';
import PhotoBlockContainer from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import PageHeader from './Header/Header.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { hoverSideBar, getActorsData } from '../../store/Layout/actions.js';
import Sidebar from './SideSlider/slider.js';
import LoadingSpinner from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';
import { categoryUrls } from '../../global/global.js';

const { Content, Header, Footer } = Layout;

function MainLayout(props) {
  const { sideBarCollapsed, actorCards, hoverSideBar, loading, profileToSearch } = props;
  const { all, maincast, secondary, male, female } = categoryUrls;

  const dispatch = useDispatch();

  const getActors = () => {
    dispatch(getActorsData(all));
  };

  const filterActions = {
    getActors,
    getMaincast: () => {
      dispatch(getActorsData(maincast));
    },
    getSecondaryActors: () => {
      dispatch(getActorsData(secondary));
    },
    getMaleActors: () => {
      dispatch(getActorsData(male));
    },
    getFemaleActors: () => {
      dispatch(getActorsData(female));
    },
  };

  const sidebarOptions = {
    collapsedStatus: sideBarCollapsed,
    hoverSideBar,
    getActorsData: getActors,
    routes: {
      home: '/',
      actors: '/actors/all',
      news: '/profile',
    },
  };
  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        <Sidebar sidebarOptions={sidebarOptions} />
        <Layout>
          <Header className='actors-layout-header'>
            <Switch>
              <Route path='/profile'>
                {<PageHeader text={profileToSearch !== null ? profileToSearch.name : ''} />}
              </Route>

              <Route path='/news'>{<PageHeader text={'Serial news'} />}</Route>
              <Route path='/actors'>{<PageHeader text={'The Stranger things cast'} />}</Route>
              <Route path='/'>{<PageHeader text={'Welcome to Hawkins!'} />}</Route>
            </Switch>
          </Header>

          <Content>
            <Switch>
              {loading ? <LoadingSpinner /> : ''}
              <Route path='/news'>{null}</Route>
              <Route path='/actors'>
                {<PhotoBlockContainer actors={actorCards} actions={filterActions} />}
              </Route>
              <Route path='/profile'>
                {<Profile actor={profileToSearch !== null ? profileToSearch : null} />}
              </Route>
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
    profileToSearch: state.getActor.profileToSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverSideBar: bindActionCreators(hoverSideBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
