export const INITIALIZED_APP = 'INITIALIZED_APP';

export const initializedApp = app => ({
  type: INITIALIZED_APP,
  app,
});

export const UPDATE_POSTBOX_TEXT = 'UPDATE_POSTBOX_TEXT';

export const updatePostboxText = text => ({
  type: UPDATE_POSTBOX_TEXT,
  text,
});

export const POST_REQUEST = 'POST_REQUEST';
export const SUCCEED_POST_REQUEST = 'SUCCEED_POST_REQUEST';
export const FAILED_POST_REQUEST = 'FAILED_POST_REQUEST';

export const postRequest = text => ({
  type: POST_REQUEST,
  text,
});

export const succeedPostRequest = entity => ({
  type: SUCCEED_POST_REQUEST,
  entity,
});

export const failedPostRequest = entity => ({
  type: FAILED_POST_REQUEST,
  entity,
});

export const GET_REQUESTS = 'GET_REQUESTS';
export const SUCCEED_GET_REQUESTS = 'SUCCEED_GET_REQUESTS';
export const FAILED_GET_REQUESTS = 'FAILED_GET_REQUESTS';

export const getRequests = () => ({
  type: GET_REQUESTS,
});

export const succeedGetRequests = entity => ({
  type: SUCCEED_GET_REQUESTS,
  entity,
});

export const failedGetRequests = entity => ({
  type: FAILED_GET_REQUESTS,
  entity,
});

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const SUCCEED_DELETE_REQUEST = 'SUCCEED_DELETE_REQUEST';
export const FAILED_DELETE_REQUEST = 'FAILED_DELETE_REQUEST';

export const deleteRequest = requestId => ({
  type: DELETE_REQUEST,
  requestId,
});

export const succeedDeleteRequest = entity => ({
  type: SUCCEED_DELETE_REQUEST,
  entity,
});

export const failedDeleteRequest = entity => ({
  type: FAILED_DELETE_REQUEST,
  entity,
});

export const GET_NOW_PLAYING = 'GET_NOW_PLAYING';
export const SUCCEED_GET_NOW_PLAYING = 'SUCCEED_GET_NOW_PLAYING';
export const FAILED_GET_NOW_PLAYING = 'FAILED_GET_NOW_PLAYING';

export const getNowPlaying = () => ({
  type: GET_NOW_PLAYING,
});

export const succeedGetNowPlaying = entity => ({
  type: SUCCEED_GET_NOW_PLAYING,
  entity,
});

export const failedGetNowPlaying = entity => ({
  type: FAILED_GET_NOW_PLAYING,
  entity,
});

export const UPDATE_FEEDBACKS_VISIBILITY = 'UPDATE_FEEDBACKS_VISIBILITY';

export const updateFeedbacksVisibility = visibility => ({
  type: UPDATE_FEEDBACKS_VISIBILITY,
  visibility,
});

export const START_PROGRESS_BAR_TRANSITION = 'START_PROGRESS_BAR_TRANSITION';

export const startProgressBarTransition = () => ({
  type: START_PROGRESS_BAR_TRANSITION,
});

export const POST_FEEDBACK = 'POST_FEEDBACK';
export const SUCCEED_POST_FEEDBACK = 'SUCCEED_POST_FEEDBACK';
export const FAILED_POST_FEEDBACK = 'FAILED_POST_FEEDBACK';

export const postFeedback = feedbackType => ({
  type: POST_FEEDBACK,
  feedbackType,
});

export const succeedPostFeedback = entity => ({
  type: SUCCEED_POST_FEEDBACK,
  entity,
});

export const failedPostFeedback = entity => ({
  type: FAILED_POST_FEEDBACK,
  entity,
});

export const GET_HISTORIES = 'GET_HISTORIES';
export const SUCCEED_GET_HISTORIES = 'SUCCEED_GET_HISTORIES';
export const FAILED_GET_HISTORIES = 'FAILED_GET_HISTORIES';

export const getHistories = () => ({
  type: GET_HISTORIES,
});

export const succeedGetHistories = entity => ({
  type: SUCCEED_GET_HISTORIES,
  entity,
});

export const failedGetHistories = entity => ({
  type: FAILED_GET_HISTORIES,
  entity,
});

export const CHECK_STATUS = 'CHECK_STATUS';
export const SUCCEED_CHECK_STATUS = 'SUCCEED_CHECK_STATUS';
export const FAILED_CHECK_STATUS = 'FAILED_CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const succeedCheckStatus = entity => ({
  type: SUCCEED_CHECK_STATUS,
  entity,
});

export const failedCheckStatus = entity => ({
  type: FAILED_CHECK_STATUS,
  entity,
});

export const UPDATE_MUSIC = 'UPDATE_MUSIC';
export const SUCCEED_UPDATE_MUSIC = 'SUCCEED_UPDATE_MUSIC';
export const FAILED_UPDATE_MUSIC = 'FAILED_UPDATE_MUSIC';

export const updateMusic = () => ({
  type: UPDATE_MUSIC,
});

export const succeedUpdateMusic = entity => ({
  type: SUCCEED_UPDATE_MUSIC,
  entity,
});

export const failedUpdateMusic = entity => ({
  type: FAILED_UPDATE_MUSIC,
  entity,
});

export const LEARN_FEEDBACKS = 'LEARN_FEEDBACKS';
export const SUCCEED_LEARN_FEEDBACKS = 'SUCCEED_LEARN_FEEDBACKS';
export const FAILED_LEARN_FEEDBACKS = 'FAILED_LEARN_FEEDBACKS';

export const learnFeedbacks = () => ({
  type: LEARN_FEEDBACKS,
});

export const succeedLearnFeedbacks = entity => ({
  type: SUCCEED_LEARN_FEEDBACKS,
  entity,
});

export const failedLearnFeedbacks = entity => ({
  type: FAILED_LEARN_FEEDBACKS,
  entity,
});
