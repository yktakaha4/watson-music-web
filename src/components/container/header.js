import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../presentational/header';
import * as Actions from '../../actions';

const component = props => (
  <div>
    <Header data={props} />
  </div>
);

export default connect(
  state => Object.assign({}, state.header, state.app),
  dispatch => bindActionCreators(Actions, dispatch),
)(component);
