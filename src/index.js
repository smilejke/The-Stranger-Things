import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout/Layout.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers.js';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);

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
