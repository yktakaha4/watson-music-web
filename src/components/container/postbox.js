import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Postbox from '../presentational/postbox';
import * as Actions from '../../actions';

const component = props => (
  <div>
    <Postbox data={props} />
  </div>
);

export default connect(
  state => Object.assign({}, state.postbox),
  dispatch => bindActionCreators(Actions, dispatch),
)(component);
