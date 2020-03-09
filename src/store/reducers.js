import { combineReducers } from 'redux';
import { layoutReducer } from './Layout/reducers.js';
import { filterReducer } from './FilterRoles/reducers.js';
import { addBannerBackground } from './LiquidBanner/reducers.js';
import { getActor } from './Actor/reducers.js';

export default combineReducers({
  layout: layoutReducer,
  filter: filterReducer,
  getActor,
  addBannerBackground,
});
