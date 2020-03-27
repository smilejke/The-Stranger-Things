import { combineReducers } from 'redux';
import { loadingReducer } from './LoadingSpinner/reducers.js';
import { filterReducer } from './FilterRoles/reducers.js';
import { getActor } from './ActorProfile/reducers.js';
import { getSerialEpisodesData } from './Watch/reducers.js';
import { episodes } from './Episodes/reducers.js';
import { views } from './Views/reducers.js';
import { actorsData } from './ActorCards/reducers.js';

export default combineReducers({
  layout: loadingReducer,
  filter: filterReducer,
  profile: getActor,
  seasons: getSerialEpisodesData,
  actorsData,
  episodes,
  views,
});
