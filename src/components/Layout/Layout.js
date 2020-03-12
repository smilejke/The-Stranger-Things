import React from 'react';
import ActorsMainPage from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hoverSideBar, getActorsData } from '../../store/Layout/actions.js';
import Sidebar from './SideSlider/slider.js';
import LoadingSpinner from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';
import { categoryUrls } from '../../global/global.js';
import GreetingsPage from '../FirstGreetingsPage/GreetingsPage.js';

const { Content, Footer } = Layout;

function MainLayout(props) {
  const {
    sideBarCollapsed,
    actorCards,
    hoverSideBar,
    loading,
    profileToSearch,
    getActorsData,
  } = props;
  const { all, maincast, secondary, male, female } = categoryUrls;

  const getActors = () => {
    getActorsData(all);
  };

  const filterActions = {
    getActors,
    getMaincast: () => {
      getActorsData(maincast);
    },
    getSecondaryActors: () => {
      getActorsData(secondary);
    },
    getMaleActors: () => {
      getActorsData(male);
    },
    getFemaleActors: () => {
      getActorsData(female);
    },
  };

  const sidebarOptions = {
    collapsedStatus: sideBarCollapsed,
    hoverSideBar,
    getActorsData: getActors,
    routes: {
      home: '/',
      actors: '/actors/all',
      news: '/watch',
    },
  };

  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        <Sidebar sidebarOptions={sidebarOptions} />
        <Layout>
          <Content>
            <Switch>
              {loading ? <LoadingSpinner /> : ''}

              <Route path='/watch'>{<div>Hello</div>}</Route>

              <Route path='/actors/:id'>
                <ActorsMainPage actors={actorCards} actions={filterActions} />
              </Route>

              <Route path='/actor-profiles/:id'>
                <Profile actor={profileToSearch} />
              </Route>

              <Route path='/'>
                <GreetingsPage />
              </Route>
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
    getActorsData: bindActionCreators(getActorsData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
