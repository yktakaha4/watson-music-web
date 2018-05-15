import * as Actions from '../actions';

const initialState = {
  requests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUCCEED_GET_REQUESTS: {
      const {
        entity,
      } = action;
      return Object.assign({}, state, {
        requests: entity,
      });
    }
    default: {
      return state;
    }
  }
};
