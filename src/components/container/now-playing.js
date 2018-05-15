import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NowPlaying from '../presentational/now-playing';
import * as Actions from '../../actions';

const component = props => (
  <div>
    <NowPlaying data={props} />
  </div>
);

export default connect(
  state => Object.assign({}, state.nowPlaying, state.app),
  dispatch => bindActionCreators(Actions, dispatch),
)(component);
