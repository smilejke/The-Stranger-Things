import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout/Layout.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers.js';

export const store = createStore(rootReducer);

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
