import React from 'react';
import ActorsMainPage from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';
import '../../index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getActorsData } from '../../store/Layout/actions.js';
import { getSeasonData } from '../../store/Watch/actions.js';
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
  const {
    actorCards,
    loading,
    profileToSearch,
    getActorsData,
    currentNews,
    getSeasonData,
    currentSeason,
  } = props;
  const { all, maincast, secondary, male, female } = categoryUrls;

  const getActors = () => {
    getActorsData(all);
  };
  const getSeason = (url) => {
    getSeasonData(url);
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
        seasonOne: '/watch/the-stranger-things-season-one',
        seasonTwo: '/watch/the-stranger-things-season-two',
        seasonThree: '/watch/the-stranger-things-season-three',
      },
    },
  };

  return (
    <Router>
      <Layout className='actors-layout-heigth'>
        <ActorsPageHeader data={navOptions} />

        <Content>
          <Switch>
            {loading ? <LoadingSpinner /> : ''}
            <Route path='/watch'>
              <WatchSerial season={currentSeason} />
            </Route>
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
    currentSeason: state.getSerialEpisodesData.currentSeason,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActorsData: bindActionCreators(getActorsData, dispatch),
    getSeasonData: bindActionCreators(getSeasonData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
