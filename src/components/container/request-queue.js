import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RequestQueue from '../presentational/request-queue';
import * as Actions from '../../actions';

const component = props => (
  <div>
    <RequestQueue data={props} />
  </div>
);

export default connect(
  state => Object.assign({}, state.requestQueue, state.app),
  dispatch => bindActionCreators(Actions, dispatch),
)(component);
