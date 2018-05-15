import { call, put, take, takeEvery } from 'redux-saga/effects';
import * as Actions from '../actions';
import * as Api from '../api';

function* postRequest(app, action) {
  const {
    userId,
  } = app;
  const entity = yield call(Api.postRequest(action.text, userId));
  if (entity.error) {
    yield put(Actions.failedPostRequest(entity));
  } else {
    yield put(Actions.succeedPostRequest(entity));
  }
}

function* getRequests(app) {
  const {
    userId,
  } = app;
  const entity = yield call(Api.getRequests(userId));
  if (entity.error) {
    yield put(Actions.failedGetRequests(entity));
  } else {
    yield put(Actions.succeedGetRequests(entity));
  }
}

function* deleteRequest(app, action) {
  const {
    userId,
  } = app;
  const entity = yield call(Api.deleteRequest(action.requestId, userId));
  if (entity.error) {
    yield put(Actions.failedDeleteRequest(entity));
  } else {
    yield put(Actions.succeedDeleteRequest(entity));
  }
}

function* getNowPlaying() {
  const entity = yield call(Api.getNowPlaying());
  if (entity.error) {
    yield put(Actions.failedGetNowPlaying(entity));
  } else {
    yield put(Actions.succeedGetNowPlaying(entity));
  }
}

function* postFeedback(app, action) {
  const {
    userId,
  } = app;
  const entity = yield call(Api.postFeedback(userId, action.feedbackType));
  if (entity.error) {
    yield put(Actions.failedPostFeedback(entity));
  } else {
    yield put(Actions.succeedPostFeedback(entity));
  }
}

function* getHistories() {
  const entity = yield call(Api.getHistories());
  if (entity.error) {
    yield put(Actions.failedGetHistories(entity));
  } else {
    yield put(Actions.succeedGetHistories(entity));
  }
}

function* checkStatus() {
  const entity = yield call(Api.checkStatus());
  if (entity.error) {
    yield put(Actions.failedCheckStatus(entity));
  } else {
    yield put(Actions.succeedCheckStatus(entity));
  }
}

function* updateMusic() {
  const entity = yield call(Api.updateMusic());
  if (entity.error) {
    yield put(Actions.failedUpdateMusic(entity));
  } else {
    yield put(Actions.succeedUpdateMusic(entity));
  }
}

function* learnFeedbacks() {
  const entity = yield call(Api.learnFeedbacks());
  if (entity.error) {
    yield put(Actions.failedLearnFeedbacks(entity));
  } else {
    yield put(Actions.succeedLearnFeedbacks(entity));
  }
}

function* appSaga() {
  const { app } = yield take(Actions.INITIALIZED_APP);

  yield takeEvery([
    Actions.GET_REQUESTS,
    Actions.SUCCEED_POST_REQUEST,
    Actions.SUCCEED_DELETE_REQUEST,
  ], getRequests, app);

  yield takeEvery([
    Actions.POST_REQUEST,
  ], postRequest, app);

  yield takeEvery([
    Actions.DELETE_REQUEST,
  ], deleteRequest, app);

  yield takeEvery([
    Actions.GET_NOW_PLAYING,
  ], getNowPlaying);

  yield takeEvery([
    Actions.GET_HISTORIES,
    Actions.SUCCEED_GET_NOW_PLAYING,
  ], getHistories);

  yield takeEvery([
    Actions.POST_FEEDBACK,
  ], postFeedback, app);

  yield takeEvery([
    Actions.CHECK_STATUS,
    Actions.SUCCEED_UPDATE_MUSIC,
    Actions.SUCCEED_LEARN_FEEDBACKS,
  ], checkStatus, app);

  yield takeEvery([
    Actions.UPDATE_MUSIC,
  ], updateMusic, app);

  yield takeEvery([
    Actions.LEARN_FEEDBACKS,
  ], learnFeedbacks, app);

  yield put(Actions.getRequests());
  yield put(Actions.getNowPlaying());
}

export default appSaga;
