import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiderDemo from './components/Layout/Layout.js';

// import NavBar from './components/Navigation/Navigation.js';
// import AdvertisingBanner from './components/AdvertisingBanner/AdvertisingBanner.js';
// import Anchor from './components/Anchor/Anchor.js';
// import Path from './components/Breadcrumb/breadcrumb.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <SiderDemo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
