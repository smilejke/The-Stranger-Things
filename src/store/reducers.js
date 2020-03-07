import { combineReducers } from 'redux';
import { layoutReducer } from './Layout/reducers.js';
import { filterReducer } from './FilterRoles/reducers.js';
import { addBannerBackground } from './LiquidBanner/reducers.js';

export default combineReducers({
  layout: layoutReducer,
  filter: filterReducer,
  addBannerBackground,
});
