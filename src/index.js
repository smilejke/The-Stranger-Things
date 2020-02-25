import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ActorsPageLoyout from './components/ActorsInfoPage/Layout/Layout.js';
import GreetingsPage from './components/FirstGreetingsPage/Layout/Layout.js';

// import NavBar from './components/Navigation/Navigation.js';
// import AdvertisingBanner from './components/AdvertisingBanner/AdvertisingBanner.js';
// import Anchor from './components/Anchor/Anchor.js';
// import Path from './components/Breadcrumb/breadcrumb.js';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <GreetingsPage /> */}
        <ActorsPageLoyout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
