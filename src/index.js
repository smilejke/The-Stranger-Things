import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedActorsComponent from './components/ActorsInfoPage/Layout/Layout.js';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { rootReducer } from './store/reducers.js';
import GreetingsPage from './components/FirstGreetingsPage/Layout/Layout.js';

export const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    const {
      pages: { greetings, actors },
    } = this.props;

    return (
      <div>
        {greetings ? <GreetingsPage /> : ''}
        {actors ? <WrappedActorsComponent /> : ''}
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
  };
};

const WrappedAppComponent = connect(putStateToAppProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedAppComponent />
  </Provider>,
  document.getElementById('root'),
);
