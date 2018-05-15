import * as Actions from '../actions';

const initialState = {
  title: undefined,
  detail: undefined,
  progress: undefined,
  remaining: undefined,
  artwork: undefined,
  feedback: {
    visibility: false,
  },
  progressBarInProp: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUCCEED_GET_NOW_PLAYING: {
      const {
        songTitle,
        albumTitle,
        artistName,
        year,
        artwork,
        trackTime,
      } = action.entity;
      const hyphen = (artistName || albumTitle) ? ' - ' : '';
      const brackets = year ? `(${year})` : '';
      const detail = `${artistName}${hyphen}${albumTitle}${brackets}`;
      return Object.assign({}, state, {
        title: songTitle,
        detail,
        progress: (trackTime.elapsed / trackTime.trackLength) * 100,
        remaining: trackTime.trackLength - trackTime.elapsed,
        artwork,
        feedback: initialState.feedback,
        progressBarInProp: state.trackTag === undefined,
      });
    }
    case Actions.START_PROGRESS_BAR_TRANSITION: {
      return Object.assign({}, state, {
        progressBarInProp: false,
      });
    }
    case Actions.UPDATE_FEEDBACKS_VISIBILITY: {
      return Object.assign({}, state, {
        feedback: {
          visibility: action.visibility,
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
