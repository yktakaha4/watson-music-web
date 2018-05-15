import { combineReducers } from 'redux';
import app from './app';
import header from './header';
import postbox from './postbox';
import requestQueue from './request-queue';
import nowPlaying from './now-playing';
import history from './history';

const index = combineReducers({
  app,
  header,
  postbox,
  requestQueue,
  nowPlaying,
  history,
});

export default index;
