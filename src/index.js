import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loyout from './components/Layout/Layout.js';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { rootReducer } from './store/reducers.js';
import { bindActionCreators } from 'redux';
import {
  hoverSideBarOn,
  hoverSideBarOff,
  showActorsPageContent,
  showGreetingsPageContent,
} from './store/actions.js';

export const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Loyout content={this.props} />
      </div>
    );
  }
}
const putStateToAppProps = (state) => {
  return {
    pages: {
      greetings: state.pages.greetings,
      actors: state.pages.actors,
      watch: state.pages.watch,
    },
    actorCards: state.actorCards,
    backgroundImages: state.backgroundImages,
    sideBarCollapsed: state.sideBarCollapsed,
  };
};

const putActionsToActorsProps = (dispatch) => {
  return {
    hoverOn: bindActionCreators(hoverSideBarOn, dispatch),
    hoverOff: bindActionCreators(hoverSideBarOff, dispatch),
    showActorsContent: bindActionCreators(showActorsPageContent, dispatch),
    showGreetingsContent: bindActionCreators(showGreetingsPageContent, dispatch),
  };
};

const WrappedAppComponent = connect(putStateToAppProps, putActionsToActorsProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedAppComponent />
  </Provider>,
  document.getElementById('root'),
);
