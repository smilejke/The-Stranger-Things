import React from 'react';
import ActorsMainPage from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getActorsData, stopLoading, startLoading } from '../../store/Layout/actions.js';
import LoadingSpinner from './loadingEffect/loading.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';
import { categoryUrls } from '../../global/global.js';
import GreetingsPage from '../FirstGreetingsPage/GreetingsPage.js';
import CurrentNews from '../FirstGreetingsPage/SerialNews/CurrentNews/CurrentNews.js';
import ActorsPageHeader from './Header/Header.js';
import WatchSerial from '../Watch/WatchPage.js';

//equal states on main page
//checkbox on back
//кол-во просмотров

const { Content } = Layout;

function MainLayout(props) {
  const { actorCards, loading, profileToSearch, getActorsData, currentNews, getSeasonData } = props;
  const { all, maincast, secondary, male, female } = categoryUrls;

  const getActors = () => {
    getActorsData(all);
  };
  const getSeason = (url) => {
    getSeasonData(url, startLoading, stopLoading);
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
    getSeason,
    routes: {
      home: '/',
      actors: '/actors/all',
      watch: {
        seasonOne: '/watch/SEASON_ONE',
        seasonTwo: '/watch/SEASON_TWO',
        seasonThree: '/watch/SEASON_THREE',
      },
    },
  };

  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        {loading ? <LoadingSpinner /> : ''}

        <ActorsPageHeader data={navOptions} />
        <Content>
          <Switch>
            <Route path='/watch/:id'>
              <WatchSerial />
            </Route>
            <Route path='/actors/:id/:id'>
              <Profile actor={profileToSearch} />
            </Route>
            <Route path='/actors/:id'>
              <ActorsMainPage actors={actorCards} actions={filterActions} />
            </Route>
            <Route path='/news/:id'>
              <CurrentNews current={currentNews} />
            </Route>
            <Route exact path='/'>
              <GreetingsPage />
            </Route>
          </Switch>
        </Content>
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
