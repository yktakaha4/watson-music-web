import * as Actions from '../actions';

const initialState = {
  updateMusicMessage: 'Unchecked.',
  learnFeedbacksMessage: 'Unchecked.',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUCCEED_CHECK_STATUS: {
      const {
        updateMusicMessage,
        learnFeedbacksMessage,
      } = action.entity;
      return Object.assign({}, state, {
        updateMusicMessage,
        learnFeedbacksMessage,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
