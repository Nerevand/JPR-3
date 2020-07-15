import { takeEvery } from "redux-saga/effects";

import { getResultSaga } from "../pages/Leaderboard/saga";

import { GET_RESULTS_ASYNC } from "../constants";

export default function* watcherSaga() {
  yield takeEvery(GET_RESULTS_ASYNC, getResultSaga);
}
