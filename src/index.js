import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout/Layout.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers.js';

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
