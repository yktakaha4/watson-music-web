import * as Actions from '../actions';

const initialState = {
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_POSTBOX_TEXT: {
      const {
        text,
      } = action;
      return {
        text,
      };
    }
    case Actions.SUCCEED_POST_REQUEST: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
