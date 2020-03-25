import React from 'react';
import '../../index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import LoadingSpinner from './loadingEffect/loading.js';
import ActorsMainPage from '../ActorsInfoPage/ActorsPhotoBlock/PhotoBlock/ActorsMainPage.js';
import Profile from '../ActorsInfoPage/ActorsPersonalPage/ActorProfile.js';
import GreetingsPage from '../FirstGreetingsPage/GreetingsPage.js';
import CurrentNews from '../FirstGreetingsPage/SerialNews/CurrentNews/CurrentNews.js';
import ActorsPageHeader from './Header/Header.js';
import WatchSerial from '../Watch/WatchPage.js';

const { Content } = Layout;

function MainLayout(props) {
  const { loading } = props;

  return (
    <Router>
      <Layout className='app-content-main-container'>
        {loading ? <LoadingSpinner /> : ''}

        <Content>
          <ActorsPageHeader />
          <Switch>
            <Route path='/watch/:id' children={<WatchSerial />} />
            <Route path='/actors/:id/:id' children={<Profile />} />
            <Route path={'/actors/:id'} children={<ActorsMainPage />} />
            <Route path='/news/:id' children={<CurrentNews />} />
            <Route exact path='/' children={<GreetingsPage />} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.layout.loading,
  };
};

export default connect(mapStateToProps)(MainLayout);
