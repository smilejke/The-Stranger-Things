import React from 'react';
import ActorsMainPage from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getActorsData } from '../../store/Layout/actions.js';
import LoadingSpinner from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';
import Footer from './Footer/Footer.js';
import { categoryUrls } from '../../global/global.js';
import GreetingsPage from '../FirstGreetingsPage/GreetingsPage.js';
import CurrentNews from '../FirstGreetingsPage/SerialNews/CurrentNews/CurrentNews.js';
import ActorsPageHeader from './Header/Header.js';

//equal states on main page
//checkbox on back
//кол-во просмотров

const { Content } = Layout;

function MainLayout(props) {
  const { actorCards, loading, profileToSearch, getActorsData, currentNews } = props;
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

  const navOptions = {
    getActors,
    routes: {
      home: '/',
      actors: '/actors/all',
      news: '/watch',
    },
  };

  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        <ActorsPageHeader data={navOptions} />

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
            <Route path='/news/:id'>
              <CurrentNews current={currentNews} />
            </Route>
            <Route path='/'>
              <GreetingsPage />
            </Route>
          </Switch>
        </Content>

        <Footer />
      </Layout>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    actorCards: state.layout.actorCards,
    loading: state.layout.loading,
    profileToSearch: state.getActor.profileToSearch,
    currentNews: state.newsDataSetter.currentNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActorsData: bindActionCreators(getActorsData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
