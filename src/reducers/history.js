import * as Actions from '../actions';

const initialState = {
  tracks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUCCEED_GET_HISTORIES: {
      const {
        entity,
      } = action;
      return Object.assign({}, state, {
        tracks: entity.reverse().map((track) => {
          const {
            trackTag,
            playedAt,
            songTitle,
            albumTitle,
            artistName,
            year,
          } = track;
          const hyphen = (artistName || albumTitle) ? ' - ' : '';
          const brackets = year ? `(${year})` : '';
          const detail = `${artistName}${hyphen}${albumTitle}${brackets}`;
          return {
            trackTag,
            playedAt,
            title: songTitle,
            detail,
            artistName,
            year,
          };
        }),
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
