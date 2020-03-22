import { combineReducers } from 'redux';
import { layoutReducer } from './Layout/reducers.js';
import { filterReducer } from './FilterRoles/reducers.js';
import { getActor } from './Actor/reducers.js';
import { getSerialEpisodesData } from './Watch/reducers.js';
import { episodes } from './Episodes/reducers.js';

export default combineReducers({
  layout: layoutReducer,
  filter: filterReducer,
  getActor,
  getSerialEpisodesData,
  episodes,
});
