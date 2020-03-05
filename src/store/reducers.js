import { combineReducers } from 'redux';
import { layoutReducer } from './Layout/reducers.js';
import { addBannerBackground } from './LiquidBanner/reducers.js';

export default combineReducers({
  layoutReducer,
  addBannerBackground,
});
