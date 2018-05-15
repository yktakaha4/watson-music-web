import * as Actions from '../actions';

const initialState = {
  userId: undefined,
  client: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INITIALIZED_APP: {
      const {
        userId,
        client,
      } = action.app;
      return Object.assign({}, state, {
        userId,
        client,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
